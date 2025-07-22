import React, { useState } from 'react';
import { TextCenter } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import './PatientProfile.css';
function PatientProfile(){
     const navigate = useNavigate();
     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
     const onUpdate = () => {
    navigate('/update-patientprofile'); //go to the update profile page 
  };
   const onBack = () => {
    navigate(-1); // Goes back to previous page
  };
  const onDeleteAccount = () => {
    setShowDeleteConfirmation(true);
  };
  const onConfirmDelete = () => {
    //write the api for delete 
    console.log('Account deleted');
    navigate('/');
  };
  const onCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
    return (
    <>
        <div className="container">
            <h2 className='page-header'>Profile</h2>
               <div className="profile-content">
                 <div className="profile-image-container">
                   <img 
                    src=""
                    alt="Profile-image" 
                    className="profile-image"
                   />
                 </div>
          
                 <div className="profile-details">
                  <h3>Girvindar</h3>
                  <p><strong>Email:</strong> gurvindarbhalla29@gmail.com</p>
                  <p><strong>Bio:</strong> xyz</p>
                 </div>
                </div>
                <div className="profile-actions">
                  <button 
                   onClick={onUpdate}
                   className="btn update-btn"
                  >
                  Update Profile
                  </button>
          
                  <button 
                   onClick={onDeleteAccount}
                   className="btn delete-btn"
                  >
                  Delete Account
                 </button>
          
                 <button 
                 onClick={onBack}
                 className="btn back-btn"
                 >
                  Back
                 </button>
                </div>
                 {showDeleteConfirmation && (
                   <div className="modal-delete">
                     <div className="delete-content">
                       <h3>Confirm Account Deletion</h3>
                       <p>Are you sure you want to delete your account? This action cannot be undone.</p>
                       <div className="delete-actions">
                         <button 
                          onClick={onConfirmDelete}
                          className="btn confirm-delete-btn"
                         >
                          Yes, Delete
                         </button>
                         <button 
                          onClick={onCancelDelete}
                          className="btn cancel-delete-btn"
                         >
                         Cancel, Delete
                         </button>
                        </div>
                      </div>
                    </div>
                  )}
        </div>
    </>
    )
}
export default PatientProfile;