
import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import { ToastContainer } from 'react-toastify'
import ApproveAppointmentList from './pages/doctor/ApproveAppointments'
import PatientProfile from './pages/patient/PatientProfile'
import DoctorProfile from './pages/doctor/DoctorProfile'
import PatientEditProfile from './pages/patient/PatientEditProfile'
import DoctorEdit from './pages/doctor/DoctorEdit'
import BookAppointment from './pages/patient/BookAppointment'
import EditAvailability from "./pages/doctor/EditAvailability";
import DoctorsList from './pages/patient/DoctorsList'
import AppointmentHistory from './pages/patient/AppointmentHistory'
import PatientAppointment from './pages/patient/PatientAppointment';
import PatientHome from './pages/patient/PatientHome'
import { AuthContext } from './context/auth.context'
import DoctorHome from './pages/doctor/DoctorHome'
import AboutUs from './pages/utils/AboutUs'
import ContactUs from './pages/utils/ContactUs'
import RescheduleAppointment from './pages/patient/RescheduleAppointment'
import AdminHome from './pages/admin/AdminHome'
import AdminProfile from './pages/admin/AdminProfile'
import AdminEditProfile from './pages/admin/AdminEditProfile'
import AddNewAdmin from './pages/admin/AddNewAdmin'
import AllDoctorsList from './pages/admin/AllDoctorsList'
import AcceptedAppointments from './pages/doctor/AcceptedAppointments';
import Register from './pages/auth/register';
import ViewDoctorDetails from './pages/patient/ViewDoctorDetails'
import DoctorDetails from './pages/admin/DoctorDetails'
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
            element={<Register/>}
          />
          <Route 
             path="aboutUs" 
             element={<AboutUs />} 
          />
          <Route 
             path="contectUs" 
             element={<ContactUs />} 
          />
          <Route
            path='adminHome'
            element={user ? <AdminHome /> : <Navigate to='/' />}
          >
          <Route 
             path="adminProfile" 
             element={<AdminProfile />} 
          />
          <Route
            path='adminEditProfile'
            element={<AdminEditProfile/>}
          />
          <Route 
             path="addNewAdmin" 
             element={<AddNewAdmin/>} 
          />
          <Route 
             path="allDoctorsList" 
             element={<AllDoctorsList/>} 
          />
          <Route 
             path="doctorDetails" 
             element={<DoctorDetails/>} 
          />
          </Route>
          <Route
            path='doctorHome'
            element={user ? <DoctorHome /> : <Navigate to='/' />}
          >
            <Route 
            path='acceptedAppointments'
            element={<AcceptedAppointments/>}
          />
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
            path='viewDoctorDetails'
            element={<ViewDoctorDetails/>}
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
