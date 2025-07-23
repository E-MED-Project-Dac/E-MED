import React from "react";
import { useState } from "react";
import './PatientHome.css';

const DoctorCards = () => {
    //Sample doctor data

    const doctors = [
        {
            No:1,
            name:'Dr. Sarah Johnson',
            speciality : 'Cardiologist',
            experience : '15',
            image:'',
            rating: 4.9
        },

        {
            No:1,
            name:'Dr. Sarah Johnson',
            speciality : 'Cardiologist',
            experience : '15',
            image:'',
            rating: 4.9
        },

        {
            No:1,
            name:'Dr. Sarah Johnson',
            speciality : 'Cardiologist',
            experience : '15',
            image:'',
            rating: 4.9
        },

        {
            No:1,
            name:'Dr. Sarah Johnson',
            speciality : 'Cardiologist',
            experience : '15',
            image:'',
            rating: 4.9
        },

        {
            No:1,
            name:'Dr. Sarah Johnson',
            speciality : 'Cardiologist',
            experience : '15',
            image:'',
            rating: 4.9
        },
    ];

    return(
        <div className="doctors-container">
            {doctors.map((doctor)=>(
                <div key={doctor.No} className="doctor-card">
                    <img
                        src = {doctor.image}
                        alt = {doctor.name}
                        className="doctor-image"
                    />
                    <div className="doctor-info">
                        <h3 className="doctor-name">{doctor.name}</h3>
                        <p className="doctor-specialty">{doctor.speciality}</p>
                        <div className="doctor-details">
                            <span className="experience">{doctor.experience} experience</span>
                            <span className="rating">★ {doctor.rating}</span>
                        </div>
                        <button className="view-details-btn">View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DoctorCards;