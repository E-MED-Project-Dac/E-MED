import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorProfileBeforeVerifying(){
    const navigate = useNavigate();
    const onAcceptRequest = () => {
        //write logic
    };

    const onRejectRequest = () => {
      //write logic
    };

    const onBack = () => {
        navigate(-1);
    };

    return(
        <>
            <div className="container">
                <h2 className='page-header'>Doctor's Profile</h2>
                <div className="profile-content">
                    <div className="profile-image-container">
                        <img
                            src=""
                            alt="Profile-image"
                            className="profile-image"
                        />
                    </div>

                    <div className="profile-details">
                        <h3>Saransh Vats</h3>
                        <p><strong>Email:</strong>saranhs041@gmail.com</p>
                        <p><strong>Bio:</strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, molestias. Molestiae assumenda, est dolorem excepturi fugiat eveniet, repudiandae esse cumque maxime veniam tempora quisquam accusantium ducimus praesentium vero voluptas, consequuntur dicta eius?</p>
                    </div>

                    <div 
                       className="profile-actions"
                       style={{display:"flex" , justifyContent:"space-between"}}
                    >
                        <button
                            onClick={''}
                            className="btn btn-success"
                        >
                            Accept Request
                        </button>

                        <button
                            onClick={onRejectRequest}
                            className="btn btn-danger"
                        >
                            Reject Request
                        </button>
                    </div>
                </div>
                 <div style={{position: 'fixed', bottom: 70, left: 20, zIndex: 1000}}>
                   <i 
                    className="bi bi-arrow-left-circle-fill fs-1" 
                    onClick={onBack}
                    style={{cursor: 'pointer', color: '#212529'}}
                   />
                 </div>
            </div>
        </>
    )
}

export default DoctorProfileBeforeVerifying
