import React, { useEffect, useState } from 'react';
import './DoctorsList.css'; // Import external CSS file
import { useNavigate } from 'react-router-dom';
import { getAvailableDoctors as getAvailableDoctorsFromserver } from '../../services/patient';
import defaultImage from '../../images/defaultimage.png'
const DoctorsList = () => {

  const [doctorList , setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const navigate = useNavigate()

    const onBack = () => {
        navigate(-1)
    }

const onDetails = (doctorId) =>  {
    //write logic
    navigate(`/patientHome/viewDoctorDetails/${doctorId}`)
    }
    const getAvailableDoctors = async () => {
       try {
      setLoading(true);
      const result = await getAvailableDoctorsFromserver();
      
      if (!result) {
        throw new Error('No response from server');
      }

      if (result.status === 200) {
        setDoctorList(result.data);
      } else {
        throw new Error(result.error || 'Failed to load doctors');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    // const result = await getAvailableDoctorsFromserver()
    // if (!result) {
    //   toast.error('Error while loading all doctors')
    // } else {
    //   if (result['status'] == 200) {
    //     setDoctorList(result['data'])
    //     console.log(result['data'])
    //   } else {
    //     toast.error(result['error'])
    //   }
    // }
  }

  useEffect(() =>{
    getAvailableDoctors()
  },[])

  if (loading) {
    return <div className="loading">Loading doctors...</div>;
  }

  if (!doctorList.length) {
    return <div className="no-doctors">No doctors available</div>;
  }

  return (
    <>
    <h3 style={{textAlign:'center',paddingTop:10}}>Available Doctors's</h3>
    <hr />
    <div className="doctors-container">
      {doctorList.map((doctor) => (
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
              onClick={() => onDetails(doctor.doctorId)}
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