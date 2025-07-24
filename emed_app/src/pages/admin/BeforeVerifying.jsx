import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorProfileBeforeVerifying(){
    const navigate = useNavigate();
    const onAcceptRequest = () => {

    };

    const onRejectRequest = () => {
        console.log('Request Rejected');
        navigate(-1);
    };

    const onBack = () => {
        navigate(-1);
    };

    return(
        <>
            <div className="container">
                <h2>Doctor's Profile</h2>
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

                    <div className="profile-actions">
                        <button
                            onClick={''}
                            className="btn update-btn"
                        >
                            Accept Request
                        </button>

                        <button
                            onClick={onRejectRequest}
                            className="btn update-btn"
                        >
                            Reject Request
                        </button>

                        <button
                            onClick={onBack}
                            className="btn back-btn"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorProfileBeforeVerifying
