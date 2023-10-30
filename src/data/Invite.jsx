// further updates....................monday blues.............................................
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Modal from "@mui/material/Modal";
import WebcamImage from "./WebcamImage";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "./Invite.css";
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { format, addHours } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/i;

export default function CompanyReg() {

  // handling the captured image
  const [capturedImage, setCapturedImage] = useState(null);
  // state to manage conditionally render start meeting or approve meeting button
  const [showStartMeetingButton, setShowStartMeetingButton] = useState(false);




  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  // const [open2, setOpen2] = useState(false);
  // const handleOpen2 = () => setOpen2(true);
  // const handleClose2 = () => setOpen2(false);

  const [users, setUsers] = useState([]);
  // console.log(users)
  const userUrl = "http://192.168.12.58:8080/api/user/alluser";

  const [selectedState, setSelectedState] = useState("");
  // console.log(selectedState)
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  // console.log(states)

  const stateUrl = "http://192.168.12.58:8080/api/state/all";


  // function for handling the captured image

  const handleImageCapture = (imageURL) => {
    // Set the captured image URL in the state
    setCapturedImage(imageURL);
  };

  //------------------------------------------LAC2-----------------------------------------
  //  state to store fetched user data
  const [fetchedUserData, setFetchedUserData] = useState(null);

  // event handler for phone number input change
  const handlePhoneNumberChange = async (event) => {
    const phoneNumber = event.target.value;


    // setFormData({
    //   ...formData,
    //   phoneNumber: phoneNumber,
    // });

    if (phoneNumber.length === 10) {
      try {
        const response = await axios.get(`http://192.168.12.54:8080/vis/getByPhone?phoneNumber=${phoneNumber}`)
        console.log(response,"response")
        // console.log(response,"auto fill")

        if (response.status === 200 && response.data.data) {
          // set the fetched user data in the form 
          setFetchedUserData(response.data.data);
          setShowStartMeetingButton(true);

          // debugger
          console.log(formData, "formData");

          setFormData({
            ...formData,

            name: response.data.data.visitor.name || "",
            phoneNumber: phoneNumber,
            email: response.data.data.visitor.email || "",
            gender: response.data.data.visitor.gender || "",
            age: response.data.data.visitor.age || "",
            state: {
              id: response.data.data.visitor.state ? response.data.data.visitor.state.id : "",
              name: response.data.data.visitor.state ? response.data.data.visitor.state.name : "",
            },
            city: {
              id: response.data.data.visitor.city ? response.data.data.visitor.city.id : "",
              name: response.data.data.visitor.city ? response.data.data.visitor.city.name : "",
            },
            user:response.data.data.employee.firstname,
            address: response.data.data.visitor.address || "",
            aadhaarNumber: response.data.data.visitor.aadhaarNumber || "",
            companyName: response.data.data.visitor.companyName || "",
            remarks: response.data.data.remarks || "",
            meetingContext: response.data.data.meetingContext || ""
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  }


  //------------------------------------------LAC2-----------------------------------------

  // state to store the meeting context dropdown
  const [meetingContextOptions, setMeetingContextOptions] = useState([]);

  // fetch meeting context dropdown
  const meetingContextUrl = "http://192.168.12.54:8080/vis/meetCon";

  const fetchMeetingContextOptions = async () => {
    try {
      const response = await axios.get(meetingContextUrl)
      if (response.status === 200 && response.data.data) {
        setMeetingContextOptions(response.data.data);
      }
    } catch (error) {
      console.log("error fetching meeting context options")
    }
  }

  // calling the meeting context options inside useeffect
  useEffect(() => {
    fetchMeetingContextOptions();
  }, [])

  const fetchCitiesByState = async (state) => {
    try {
      const response = await axios.get(
        `http://192.168.12.58:8080/api/city/${state}`
        // http://192.168.12.54:8080/sc/all/26--biswajit
      );
      if (response.status === 200 && response.data.data) {
        setCities(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching cities", error);
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(userUrl);
        if (response.status === 200 && response.data.data) {
          const userList = response.data.data.map((user) => ({
            id: user.id,
            username: user.name,
            profilePhoto: user.image,
          }));
          setUsers(userList);
        }
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(stateUrl);
        if (response.status === 200 && response.data.data) {
          setStates(response.data.data);
          console.log(states, "this selected state")
        }
      } catch (error) {
        console.error("Error fetching states", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCitiesByState(selectedState);
    }
  }, [selectedState]);

  const handleDateTimePickerChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const initialFormData = {
    name: "",
    phoneNumber: "",
    email: "",
    gender: "",
    age: "",
    state: {
      id: "",
      // name: "",
    },
    city: {
      id: "",
      // name: "",
    },
    address: "",
    imageUrl: null,
    aadhaarNumber: "",
    // user: null,
    user: {
      id: ""

    },
    meetingContext: "",
    companyName: "",
    remarks: "",
    meetingStartDateTime: null,
    meetingEndDateTime: null,
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  console.log("form data", formData.state)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    for (const key in formData) {
      if (
        ["name", "phoneNumber", "email", "gender", "age", "state", "city", "address", "aadhaarNumber", "user", "meetingContext", "companyName", "meetingStartDateTime", "meetingEndDateTime"].includes(key) &&
        !formData[key]
      ) {
        toast.error("All input fields are required");
        return;
      }
    }

    const formattedDateTimePicker1 = formData.meetingStartDateTime
      ? formData.meetingStartDateTime.toISOString()
      : null;
    const formattedDateTimePicker2 = formData.meetingEndDateTime
      ? formData.meetingEndDateTime.toISOString()
      : null;


    // capture image from local storage
    const imageUrl = localStorage.getItem("capturedImageURL");

    const updatedFormData = {
      // ...formData,
      name: formData.name || "",
      phoneNumber: formData.phoneNumber || "",
      email: formData.email || "",
      gender: formData.gender || "",
      age: formData.age || "",
      state: {
        id: formData.state,
      },
      city: {
        id: formData.city.id,
      },
      address: formData.address,
      imageUrl: imageUrl,

      aadhaarNumber: formData.aadhaarNumber || "",
      user: {
        id: formData.user.id,
      },
      meetingContext: formData.meetingContext,
      companyName: formData.companyName,
      remarks: formData.remarks,
      meetingStartDateTime: formattedDateTimePicker1,
      meetingEndDateTime: formattedDateTimePicker2,
    };
    try {
      const response = await axios.post(
        "http://192.168.12.54:8080/vis/add",
        updatedFormData
      );
      if (response.status === 200) {
        console.log("Form Data:", updatedFormData);
        localStorage.removeItem("capturedImageURL");
        // console.log("Request successful", response.data);
      }
    } catch (err) {
      console.error(err, "There is some issue moving into the database");
    }

    setFormData({ ...initialFormData });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "state") {
      const selectedStateObject = states.find((state) => state.name === value);
      const selectedStateId = selectedStateObject ? selectedStateObject.id : "";
      // console.log(selectedStateId)

      setSelectedState(selectedStateId);
      setFormData({
        ...formData,
        // change it to select state object
        state: selectedStateId,
        // state: selectedStateObject,
      });
    } else if (name === "city") {
      const selectedCityObject = cities.find((city) => city.name === value);
      const selectedCityId = selectedCityObject ? selectedCityObject.id : "";

      setFormData({
        ...formData,
        city: selectedCityObject,
      });
    } else if (name === "email") {
      const emailError = validateInput(value, emailRegex);
      setFormData({
        ...formData,
        email: value,
        emailError: emailError,
      })
    } else if (name === "phoneNumber") {
      const phoneNumberError = validateInput(value, /^\d{10}$/);
      setFormData({
        ...formData,
        phoneNumber: value,
        phoneError: phoneNumberError,
      })
    }

    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const validateInput = (value, validationRule) => {
    if (validationRule.test(value)) {
      return "";
    } else {
      return "Invalid Input"
    }
  }
  const emailError = validateInput(formData.email, emailRegex);
  const phoneNumberError = validateInput(formData.phoneNumber, /^\d{10}$/)

  // function to start meeting ---------------------------------------------------------MEETING--------------------------

  const handleStartMeeting = async(e) => {
    e.preventDefault();


    const formattedDateTimePicker1 = formData.meetingStartDateTime
      ? formData.meetingStartDateTime.toISOString()
      : null;
    const formattedDateTimePicker2 = formData.meetingEndDateTime
      ? formData.meetingEndDateTime.toISOString()
      : null;


    // capture image from local storage
    const imageUrl = localStorage.getItem("capturedImageURL");

    const updatedFormData = {
      // ...formData,
      name: formData.name || "",
      phoneNumber: formData.phoneNumber || "",
      email: formData.email || "",
      gender: formData.gender || "",
      age: formData.age || "",
      state: {
        id: formData.state,
      },
      city: {
        id: formData.city.id,
      },
      address: formData.address,
      imageUrl: imageUrl,

      aadhaarNumber: formData.aadhaarNumber || "",
      user: {
        id: formData.user.id,
      },
      meetingContext: formData.meetingContext,
      companyName: formData.companyName,
      remarks: formData.remarks,
      meetingStartDateTime: formattedDateTimePicker1,
      meetingEndDateTime: formattedDateTimePicker2,
    };
    try {
      const response = await axios.post(
        "http://192.168.12.54:8080/vis/add",
        updatedFormData
      );
      if (response.status === 200) {
        console.log("Form Data:", updatedFormData);
        localStorage.removeItem("capturedImageURL");
        // console.log("Request successful", response.data);
      }
    } catch (err) {
      console.error(err, "There is some issue moving into the database");
    }

    setFormData({ ...initialFormData });
  }

  return (
    <>
      <div className="img">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box
            display="flex"
            flexDirection="column"
            minWidth="550px"
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            gap={1}
            elevation={2}
            boxShadow={"5px 5px 10px #ccc"}
          >
            <Typography fontSize={30} color="gray" variant={"h1"}>
              Visitor Details
            </Typography>

            {/* instead of handling change in phone number in case of  onChange and onInput we can handle the 
            onInput by putting the get user by phone number API inside useeffect and adding dependancy as phone number
            */}

            <div className="maindto">
              <div className="firstdto">
                <TextField
                  placeholder="Full Name*"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  inputProps={{ maxLength: 25 }}

                />
                <TextField
                  placeholder="Visitor Phone Number*"
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  autoComplete="off"
                  onInput={handlePhoneNumberChange}
                  error={!!formData.phoneError}
                  helperText={formData.phoneError}
                  inputProps={{ maxLength: 10 }}

                />
              </div>
              <div className="seconddto">
                {!capturedImage ? (
                  <CameraEnhanceIcon sx={{ fontSize: 30, color: "#00308F", cursor: "pointer" }} onClick={handleOpen} />
                ) : <img src={capturedImage} alt="Captured" style={{ height: "120px", width: "120px", borderRadius: "50%" }} />}

              </div>
            </div>
            <TextField
              placeholder="Visitor Email*"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!formData.emailError}
              helperText={formData.emailError}
              inputProps={{ maxLength: 25 }}

            />

            <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{ marginRight: '10px' }}>Gender*    </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <TextField
              placeholder="Age*"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              inputProps={{ maxLength: 2 }}

            />

            <div
              className="input"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={selectedState}
                  value={formData.state.name}
                  label="State"
                  name="state"
                  onChange={handleChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state.id} value={state.name}>
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.city.name}
                  label="City"
                  name="city"
                  onChange={handleChange}
                >
                  {cities.map((city) => (
                    <MenuItem key={city.id} value={city.name}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <TextField
              placeholder="Address*"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <TextField
              placeholder="Aadhaar number*"
              type="number"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleChange}
              inputProps={{ maxLength: 12 }}

            />

            <FormControl >
              <InputLabel id="demo-user-select-label">Host*</InputLabel>
              <Select
                labelId="demo-user-select-label"
                id="demo-user-select"
                value={formData.selectedUser}
                label="Select a User"
                name="user"
                onChange={handleChange}
              >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {user.username}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div
              className="input"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="Start Time*"
                    value={formData.meetingStartDateTime}
                    onChange={(value) =>
                      handleDateTimePickerChange("meetingStartDateTime", value)
                    }
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="End Time*"
                    value={formData.meetingEndDateTime}
                    onChange={(value) =>
                      handleDateTimePickerChange("meetingEndDateTime", value)
                    }
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            {/* remarks or purpose */}
            <TextField
              placeholder="Remarks"
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              inputProps={{ maxLength: 35 }}

            />
            <TextField
              placeholder="Company Name"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              inputProps={{ maxLength: 25 }}

            />



            {/* map using API */}
            {/* {---------------------------------LAC----------------------} */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Meeting Context*
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.meetingContext}
                onChange={handleChange}
                name="meetingContext"
                label="meetingContext"
              >
                {meetingContextOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* {---------------------------LAC----------------------------} */}

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <div>

                {/* <Button variant="contained" onClick={handleOpen}>Capture</Button> */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{ zIndex: 1 }}
                >

                  {/* webcam in modal */}
                  <Box sx={style}>
                    <WebcamImage onCloseModal={handleClose} onImageCapture={handleImageCapture} />
                  </Box>
                </Modal>
              </div>

              {/* <Button variant="contained" fullWidth onClick={handleSubmit}>Approve Meeting</Button> */}
              {showStartMeetingButton ? (
                <Button variant="contained" fullWidth onClick={handleStartMeeting}sx={{backgroundColor:"green"}}>Start Meeting</Button>
              ) : (
                <Button variant="contained" fullWidth onClick={handleSubmit}>Approve Meeting</Button>
              )}
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
}
