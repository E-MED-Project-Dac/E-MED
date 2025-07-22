import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import PatientNavbar from "./pages/patient/PatientNavbar";
import PatientProfile from "./pages/patient/PatientProfile";
import DoctorEdit from "./pages/doctor/DoctorEdit";
import DoctorNavbar from "./pages/doctor/doctorNavbar";
//import { AuthContext } from './contexts/auth.context'
function App() {
  // create a state member for keeping user details
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="patientNavbar" element={<PatientNavbar />} />
        <Route path="patientProfile" element={<PatientProfile />} />
        <Route path="editDoctor" element={<DoctorEdit />} />
        <Route path="doctorNavbar" element={<DoctorNavbar />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
