import React, { useEffect, useState } from 'react';
import './DoctorsList.css'; // Import external CSS file
import { useNavigate } from 'react-router-dom';
import { getAvailableDoctors as getAvailableDoctorsFromserver } from '../../services/patient';
import defaultImage from '../../images/defaultimage.png'
const DoctorsList = () => {

  const [doclorList , setDoctorList] = useState([]);
  const navigate = useNavigate()

    const onBack = () => {
        navigate(-1)
    }

const onDetails = () => {
    //write logic
    navigate('/patientHome/viewDoctorDetails')
    }

    const getAvailableDoctors = async () => {
    const result = await getAvailableDoctorsFromserver()
    if (!result) {
      toast.error('Error while loading all doctors')
    } else {
      if (result['status'] == 200) {
        setDoctorList(result['data'])
        console.log(result['data'])
      } else {
        toast.error(result['error'])
      }
    }
  }

  useEffect(() =>{
    getAvailableDoctors()
  },[])

  return (
    <>
    <h3 style={{textAlign:'center',paddingTop:10}}>Available Doctors's</h3>
    <hr />
    <div className="doctors-container">
      {doclorList.map((doctor) => (
        <div key={doctor.doctorId} className="doctor-card">
          <img 
            src={doctor.image  || defaultImage} 
            alt={doctor.firstName}
            className="doctor-image"
          />
          <div className="doctor-info">
            <h3 className="doctor-name">{doctor.firstName+" "+doctor.lastName}</h3>
            {/* <p className="doctor-specialty">{doctor.specialty}</p>
            <div className="doctor-details">
              <span className="experience">{doctor.experience} experience</span>
              <span className="rating">★ {doctor.rating}</span>
            </div> */}
            <button 
              className="view-details-btn"
              onClick={onDetails}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
      <div style={{position: 'fixed', bottom: 70, left: 20, zIndex: 1000}}>
        <i 
          className="bi bi-arrow-left-circle-fill fs-1" 
          onClick={onBack}
          style={{cursor: 'pointer', color: '#212529'}}
        />
      </div>
    </div>
  </>  
  );
};

export default DoctorsList;