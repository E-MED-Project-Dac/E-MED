import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

function ViewDoctorDetails(){
  const navigate = useNavigate();
  
  const onBack = () => {
    navigate(-1);
  }

  const onBook = () => {
    //write logic 
    navigate('/patientHome/bookAppointment')
  };

  return(
    <>
        <div className="container"  >
            <h2 className='page-header'>Profile</h2>
            <div className="row">
               <div className="col col-4">
                 <div className="profile-image-container">
                   <img 
                    src=""
                    alt="Profile-image" 
                    className="profile-image"
                   />   
                 </div>
                </div>
                <div className="col col-8">
                  <h3>Saransh</h3>
                  <p><strong>Email:</strong> saranshvats041@gmail.com</p>
                  <p><strong>Bio:</strong> abc</p>
                  <p>.</p>
                  <p>.</p>
                  <p>.</p>
                  <p>.</p>
                </div>
            </div>
            <hr />
                <div 
                 className="profile-actions"
                 style={{display:"flex",justifyContent:"space-between"}}
                 >
                 <button 
                   onClick={onBack}
                   className="btn btn-danger"
                 >
                  Back
                 </button>
                 <button 
                   onClick={onBook}
                   className="btn btn-success"
                  >
                   Book Appointment
                 </button>
              </div>   
        </div>
    </>
  )

}

export default ViewDoctorDetails;