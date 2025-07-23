import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import PatientNavbar from "./pages/patient/PatientNavbar";
import ApproveAppointmentList from "./pages/doctor/ApproveAppointment";
import PatientProfile from "./pages/patient/PatientProfile";
import DoctorProfile from "./pages/doctor/DoctorProfile";
import PatientEditProfile from "./pages/patient/PatientEditProfile";
import EditAvailability from "./pages/doctor/EditAvailability";

function App() {
  // create a state member for keeping user details
  const [user, setUser] = useState(null);

  return (
    <>

        <Routes>
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='register'
            element={<Register />}
          />
          <Route 
            path='approveAppointment'
            element={<ApproveAppointmentList/>}
           />
          <Route 
            path='patientNavbar'
            element={<PatientNavbar/>}
          />
           <Route 
            path='doctorNavbar'
            element={<PatientNavbar/>}
          />
           <Route 
            path='patientHome'
            element={<DoctorCards/>}
          />
          <Route 
            path='patientProfile'
            element={<PatientProfile/>}
          />
          <Route
            path='doctorProfile'
            element={<DoctorProfile/>}
          />
           <Route
            path='doctorEditProfile'
            element={<DoctorEdit/>}
          />
           <Route
            path='patientEditProfile'
            element={<PatientEditProfile/>}
          />
          <Route
            path='bookAppointment'
            element={<BookAppointment/>}
          />
          <Route 
             path="editAvailability" 
             element={<EditAvailability />} 
          />
        </Routes>


      <ToastContainer />
    </>
  );
}

export default App;
