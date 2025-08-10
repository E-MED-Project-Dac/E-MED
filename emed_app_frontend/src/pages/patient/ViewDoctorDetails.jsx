import React , {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoctor as getDoctorFromServer } from "../../services/patient";
import defaultImage from '../../images/defaultimage.png'


function ViewDoctorDetails(){
  const { doctorId } = useParams(); // Get ID from URL
  const [doctor , setDoctor] = useState({})
  const navigate = useNavigate();
  
  const onBack = () => {
    navigate(-1);
  }

  const onBook = (doctorId) => {
    //write logic 
    navigate(`/patientHome/bookAppointment/${doctorId}`)
  };
 const getDoctor = async(doctorId) => {
     const result = await getDoctorFromServer(doctorId)
         if (!result) {
           toast.error('Error while loading  doctor')
         } else {
           if (result['status'] == 200) {
             setDoctor(result['data'])
            // console.log(result['data'])
           } else {
             toast.error(result['error'])
           }
         }
 }


 useEffect(() =>{
     getDoctor(doctorId)
   },[])

  return(
    <>
        <div className="container"  >
            <h2 className='page-header'>Profile</h2>
            <div className="row">
               <div className="col col-4">
                 <div className="profile-image-container">
                   <img 
                    src={doctor.image || defaultImage}
                    alt={doctor.firstName} 
                    className="profile-image"
                   />   
                 </div>
                </div>
                <div className="col col-8">
                  <h3>{"Dr. "+doctor.firstName+" "+doctor.lastName}</h3>
                  <p><strong>Email:</strong>{doctor.email}</p>
                  {/* <p><strong>Bio:</strong> abc</p>
                  <p>.</p>
                  <p>.</p>
                  <p>.</p>
                  <p>.</p> */}
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
                   onClick={() =>onBook(doctor.doctorId)}
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