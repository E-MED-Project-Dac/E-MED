import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { ToastContainer } from 'react-toastify'
import PatientNavbar from './pages/patient/PatientNavbar'
import AppointmentList from './pages/doctor/approveAppointment'
//import { AuthContext } from './contexts/auth.context'
function App() {
  // create a state member for keeping user details
  const [user, setUser] = useState(null)

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
          <Route path='patientNavbar' element={<PatientNavbar/>}/>
          <Route path='approveAppointment' element={<AppointmentList/>}/>

        </Routes>

      <ToastContainer />
    </>
  )
}

export default App

