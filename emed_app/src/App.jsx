
import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { ToastContainer } from 'react-toastify'
import PatientNavbar from './pages/patient/PatientNavbar'
import ApproveAppointmentList from './pages/doctor/ApproveAppointments'
import PatientProfile from './pages/patient/PatientProfile'
import DoctorProfile from './pages/doctor/DoctorProfile'
import PatientEditProfile from './pages/patient/PatientEditProfile'
import DoctorEdit from './pages/doctor/DoctorEdit'
import BookAppointment from './pages/patient/BookAppointment'
import EditAvailability from "./pages/doctor/EditAvailability";
import DoctorsList from './pages/patient/DoctorsList'
import DoctorNavbar from './pages/doctor/doctorNavbar'
import AppointmentHistory from './pages/patient/AppointmentHistory'
import PatientAppointment from './pages/patient/PatientAppointment';
import PatientHome from './pages/patient/PatientHome'
import { AuthContext } from './context/auth.context'
import DoctorHome from './pages/doctor/DoctorHome'
import RescheduleAppointment from './pages/patient/RescheduleAppointment'
function App() {
  // create a state member for keeping user details
  const [user, setUser] = useState("null");

  return (
    <>
      <AuthContext value={{user , setUser}}>
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
            path='doctorHome'
            element={user ? <DoctorHome /> : <Navigate to='/' />}
          >
          <Route 
            path='approveAppointment'
            element={<ApproveAppointmentList/>}
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
             path="editAvailability" 
             element={<EditAvailability />} 
          />
          </Route>
          <Route
             path='patientHome'
             element={user ? <PatientHome /> : <Navigate to='/' />}
          >
          <Route 
            path='doctorslist'
            element={<DoctorsList/>}
          />
          <Route 
            path='patientProfile'
            element={<PatientProfile/>}
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
            path='upcomingAppointmentList'
            element={<PatientAppointment/>}
            />
             <Route
            path='rescheduleAppointment'
            element={<RescheduleAppointment/>}
            />
          <Route
            path='appointmentHistory'
            element={<AppointmentHistory/>}
            />
          </Route>
        </Routes>
      </AuthContext>

      <ToastContainer />
    </>
  );
}

export default App;
