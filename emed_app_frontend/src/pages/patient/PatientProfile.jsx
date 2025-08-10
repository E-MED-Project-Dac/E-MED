import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientProfile.css';
import defaultImage from '../../images/defaultimage.png'
import { GetPatient as getPatientFromServer } from '../../services/patient';
import { toast } from 'react-toastify';
import { DeletePatient as DeletePatientFromServer } from '../../services/patient';

function PatientProfile(){
     const [patient , setPatient] = useState({})
     const [patientId , setPatientId] = useState('1')
     const navigate = useNavigate();
     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
     const onUpdate = () => {
      //go to the update profile page
    navigate('/patientHome/patientEditProfile',{
      state: {patient: patient}
    });  
  };
   const onBack = () => {
    navigate(-1); // Goes back to previous page
  };
  const onDeleteAccount = () => {
    setShowDeleteConfirmation(true);
  };
  const onConfirmDelete = async() =>{
    //write the api for delete 
    const result = await DeletePatientFromServer(patientId)
     if (!result) {
               toast.error('Error while loading  patient')
             } else {
               if (result['status'] == 200) {
                 toast.success('delete user successfully...!')
                 navigate('/');
               } else {
                 toast.error(result['error'])
               }
             }
  };
  const onCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };


  
    const GetPatient = async(patientId) => {
         const result = await getPatientFromServer(patientId)
             if (!result) {
               toast.error('Error while loading  patient')
             } else {
               if (result['status'] == 200) {
                 setPatient(result['data'])
               } else {
                 toast.error(result['error'])
               }
             }
     }
    
    
     useEffect(() =>{
         GetPatient(patientId)
       },[])


    return (
    <>
        <div className="container">
            <h2 className='page-header'>Profile</h2>
               <div className="profile-content">
                 <div className="profile-image-container">
                   <img 
                     src={patient.image  || defaultImage} 
                     alt={patient.firstName}
                    className="profile-image"
                   />   
                 </div>
                 <div style={{textAlign:'center'}}>
                      <button className="btn update-img"  >Update Image</button>
                   </div>
          
                 <div className="profile-details">
                  <h3>{patient.firstName+" "+patient.lastName}</h3>
                  <p><strong>Email : </strong>{patient.email}</p>
                  <p><strong>Mobile : </strong>{patient.mobile}</p>
                  <p><strong>Gender : </strong>{patient.gender}</p>
                 </div>
                </div>
                <div 
                   className="profile-actions"
                   style={{display:"flex" , justifyContent:"space-between"}}
                >
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
export default PatientProfile;