import React from 'react';
import './AllDoctorsList.css'; // Import external CSS file
import { useNavigate } from 'react-router-dom';

const AllDoctorsList = () => {

    const navigate = useNavigate()

    const onBack = () => {
        navigate(-1)
    }

const onDetails = () => {
    //write logic
    }

  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '12 years',
      image: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '8 years',
      image: 'https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Dr. Priya Patel',
      specialty: 'Pediatrician',
      experience: '15 years',
      image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Dr. Robert Williams',
      specialty: 'Orthopedic Surgeon',
      experience: '10 years',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
      rating: 4.5
    },
    {
      id: 5,
      name: 'Dr. Emily Wilson',
      specialty: 'Dermatologist',
      experience: '7 years',
      image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
      rating: 4.7
    }
  ];

  return (
    <>
     <h3 style={{textAlign:'center',paddingTop:10}}>Doctors's</h3>
    <hr />
    <div className="doctors-container">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="doctor-image"
          />
          <div className="doctor-info">
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <div className="doctor-details">
              <span className="experience">{doctor.experience} experience</span>
              <span className="rating">★ {doctor.rating}</span>
            </div>
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

export default AllDoctorsList;