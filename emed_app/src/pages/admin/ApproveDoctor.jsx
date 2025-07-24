import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorProfileBeforeVerifying from './DoctorProfileBeforeVerifying';
function ApproveDoctor(){
  const navigate = useNavigate();
  const [registeredDoctors,setRegisteredDoctors]=useState([
    {
      SrNo:"1",
      DoctorName:"Dr. Gurvindar",
      EmailId:"guru123@gmail.com",
      Specialization:"Cardiologist",
    },
    {
      SrNo:"2",
      DoctorName:"Dr. Saransh",
      EmailId:"saransh041@gmail.com",
      Specialization:"Neurologist",
    },
    {
      SrNo:"3",
      DoctorName:"Dr. Pulkit",
      EmailId:"pulkit321@gmail.com",
      Specialization:"Orthologist",
    },
    {
      SrNo:"4",
      DoctorName:"Dr. Aadarsh",
      EmailId:"aadarsh@gmail.com",
      Specialization:"Cardiologist",
    },
  ]);

  const onBack = () => {
    navigate(-1)
  }

  const onViewDetails = () =>{
    navigate('/adminHome/beforeVerifying');
  }
  return(
<>
     <div>
        <h2 style={{textAlign:'center'}}>Newly Registered Doctors</h2>
        <hr/>
        <div style={{margin:30}}>
          <table className='table table-stripped border-1'>
            <thead>
              <tr>
                <th>SrNo.</th>
                <th>Name</th>
                <th>EmailId</th>
                <th>Specialization</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {registeredDoctors.map((doctor) => (
                <tr>
                  <td>{doctor.SrNo}</td>
                  <td>{doctor.DoctorName}</td>
                  <td>{doctor.EmailId}</td>
                  <td>{doctor.Specialization}</td>
                  <td>
                    <div>
                      <button 
                        className='btn btn-info'
                        onClick={onViewDetails}
                      >
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button
              className='btn btn-danger'
              onClick={onBack}
            >
                Back
            </button>
          </div>
        </div>
     </div>
</>
  );
}
export default ApproveDoctor;