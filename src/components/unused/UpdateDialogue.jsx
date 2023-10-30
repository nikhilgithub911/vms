import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem, 
  FormControl, 
  InputLabel,
} from '@mui/material';

const UpdateDialogue = () => {

    const [openEditDialog, setOpenEditDialog] = useState(false); 
    const [editedItem, setEditedItem] = useState(null); 
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');
    const [rows, setRows] = useState([]);

    const BASE_URL = 'http://192.168.12.12:8080/api/user';

    const AuthToken = sessionStorage.getItem('token');


    const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AuthToken}`, // Include the token in the headers.
    },
  });

  // Define headers separately
  const headers = {
    Authorization: `Bearer ${AuthToken}`,
  };

      const handleSaveEdit = async () => {
    try {
      // Prepare the payload with edited data
      const payload = {
        firstName: editedItem.firstName,
        lastName: editedItem.lastName,      
        email: editedItem.email,
        id: editedItem.id,
        phone: editedItem.phone,
        role: editedItem.role
        
          // role: editedItem.role.role

      };
      // console.log("payload",payload.role)
      
      await axios.post(`${BASE_URL}/update `, payload, { headers });
      
      // const updatedRows = rows.map((row) =>
      //   row.id === editedItem.id ? { ...row, ...payload } : row
      // );
      const response = await axiosInstance.get(`${BASE_URL}/id?id=${editedItem.id}`);
      const updatedData = response.data.response;
      console.log("Updated Data", updatedData)
  
      const updatedRole = updatedData.role || {};
      const updatedRoleName = updatedRole.role || '';
  
      const updatedRows = rows.map((row) => {
        if (row.id === editedItem.id) {
          return { ...row, ...payload, role: updatedRoleName };
        }
        return row;
      });
    setRows(updatedRows);
    console.log("updated Rows", updatedRows)
      setOpenEditDialog(false);
      console.log(`Saved changes for item with ID ${editedItem.id}`);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

    const handleEditDialogClose = () => {
        setOpenEditDialog(false);
      };


  return (
          <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Item (ID: {editedItem ? editedItem.id : ''})</DialogTitle>
        <DialogContent>
          {editedItem && (
            <form>
              <TextField
                sx={{ mt: '2%', mb: '2%' }}
                label="First Name"
                fullWidth
                value={editedItem.firstName}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, firstName: e.target.value })
                }
              />
              <TextField
                sx={{ mt: '2%', mb: '2%' }}
                label="Last Name"
                fullWidth
                value={editedItem.lastName}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, lastName: e.target.value })
                }
              />
              <TextField
                sx={{ mt: '2%', mb: '2%' }}
                label="Email"
                fullWidth
                value={editedItem.email}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, email: e.target.value })
                }
              />
              <TextField
                sx={{ mt: '2%', mb: '2%' }}
                label="Phone"
                fullWidth
                value={editedItem.phone}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, phone: e.target.value })
                }
              />

<FormControl fullWidth sx={{ mt: '2%', mb: '2%' }}>
  <InputLabel>Role</InputLabel>
  <Select
    value={selectedRole}
    onChange={(e) => {
      // Update the selectedRole state
      setSelectedRole(e.target.value);
      // Update the editedItem's role property with the selected role's ID
      setEditedItem({ ...editedItem, role: e.target.value });
      console.log("setSelectedRole", setSelectedRole)
    }}
  >
    <MenuItem value="" disabled>
      Select a role
    </MenuItem>
    {roles && roles.length > 0 && roles.map((role) => (
      <MenuItem key={role.id} value={role.id}>
        {role.role}
      </MenuItem>
    ))}
  </Select>
</FormControl>

            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default UpdateDialogue