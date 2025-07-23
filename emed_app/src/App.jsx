import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { ToastContainer } from 'react-toastify'
import PatientNavbar from './pages/patient/PatientNavbar'
import ApproveAppointmentList from './pages/doctor/ApproveAppointment'
import PatientProfile from './pages/patient/PatientProfile'
import DoctorProfile from './pages/doctor/DoctorProfile'
import PatientEditProfile from './pages/patient/PatientEditProfile'

//import { AuthContext } from './contexts/auth.context'
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
            path='patientProfile'
            element={<PatientProfile/>}
          />
          <Route
            path='doctorProfile'
            element={<DoctorProfile/>}
          />
           <Route
            path='patientEditProfile'
            element={<PatientEditProfile/>}
          />
        </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
