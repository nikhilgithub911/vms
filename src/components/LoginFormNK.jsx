import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAuth } from '../routes/AuthContext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import image1 from "../assets/office2_0.jpg"
import image2 from "../assets/rapidsoft-technologies_logo.png"
import Loader from './Loader';

function LoginForm({ }) {
  const navigate = useNavigate(); 
const BASE_URL = 'http://192.168.12.54:8080';
// const BASE_URL = 'http://192.168.12.58:8080';

  const { authenticated, setAuthenticated } = useAuth();
  const { setUserRoleAndAuth } = useAuth();
  const [loading, setLoading] = useState(false)

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post(`${BASE_URL}/token`, credentials);

      if(response.status === 200){
        toast.success('Successfully Logged In', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
    const token = response.data.token;
    const loggedUserName = response.data.name;
    const loggedUserRole = response.data.role;
    const loggedUserUsername = response.data.username

    const companyId = response.data.company_id
    const companyName = response.data.company_name
    const adminId = response.data.id


    setUserRoleAndAuth(loggedUserRole);

    sessionStorage.setItem('token', token);
    sessionStorage.setItem('loggedUserName', loggedUserName);
    sessionStorage.setItem('loggedUserRole', loggedUserRole);
    sessionStorage.setItem('loggedUserUsername', loggedUserUsername)
    sessionStorage.setItem('companyId', companyId)
    sessionStorage.setItem('companyName', companyName)


    localStorage.setItem('token', token);
    localStorage.setItem('companyId', companyId);
    localStorage.setItem('adminId', adminId)

    setAuthenticated(true);
    if (loggedUserRole === 'SUPERADMIN') {
      navigate('/companyDetails');
    } else if (loggedUserRole === 'ADMIN') {
      navigate('/dashboard');
    } else if (loggedUserRole === 'RECEPTIONIST') {
      navigate('/receptionistdashboard')
    } else if (loggedUserRole === 'EMPLOYEE') {
      navigate('/empdashboard')
    }
    else {
      navigate('*');
    }
      }
    } catch (error) {
      if(error.request.status === 400){
        toast.error('Incorrect username or password', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        }       else{
          toast.error('Something went wrong.', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          }
    }
    setLoading(false)
  };

  const appStyle = {
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  };

  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
    }} style={appStyle}>
      <Loader isLoading={loading} />

        <Box sx={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              bgcolor:'#d9d9d98f',
        }}>

        <Paper elevation={7} sx={{ height: "380px", width: "600px",display:'flex', bgcolor:'#ffffffd8', borderRadius:'15px'}}>
      <form onSubmit={handleSubmit}
      style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', }}
      >

<Box display='flex'>
<img src={image2} alt="Logo" style={{ width: '100px', height: '40px', marginRight:'1.5em', marginTop:'1.2em' }} />

<Typography 
variant='h5' 
sx={{
    fontSize: "25px",
    fontWeight:'550', 
    color: "#66666", 
    mt: 2.5,
    }}
    >
    Visitor Management System
    </Typography>
</Box>
        <TextField
            id="username"
            name="username"
            label="Enter Username"
            variant="outlined"
            sx={{ width: "80%", mt:'3em'  }}
            value={credentials.username}
            onChange={handleChange}
            required
        />

        <TextField
            id="password"
            name="password"
            label="Enter Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            sx={{ width: "80%", mt:'3em'  }}
            value={credentials.password}
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            required
        />
        <Button
            variant="contained"
            sx={{ mt: 4, width: "10em", height:'3em' }}
            type="submit"
        >
            Login
        </Button>
      </form>
      </Paper>

        </Box>

    </Box>
  );
}

export default LoginForm;
