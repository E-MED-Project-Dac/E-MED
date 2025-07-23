import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApproveAppointmentList = () => {
  const [appointments, setAppointments] = useState([
    //dummy data 
    { appNo: 1, email:'abc123@gmail.com',patientsName: 'John Doe', mobileNo: '1234567890', dateOfBirth: '1990-01-01', timeSlot: '10:00 AM', status: '' },
    { appNo: 2, email:'abc123@gmail.com',patientsName: 'Jane Doe', mobileNo: '0987654321', dateOfBirth: '1995-05-05', timeSlot: '11:00 AM', status: '' },
    { appNo: 3, email:'abc123@gmail.com', patientsName: 'John Doe', mobileNo: '1234567890', dateOfBirth: '1990-01-01', timeSlot: '10:00 AM', status: 'accepted' },
    { appNo: 4, email:'abc123@gmail.com', patientsName: 'Jane Doe', mobileNo: '0987654321', dateOfBirth: '1995-05-05', timeSlot: '11:00 AM', status: 'rejected' },
  ]);

  const navigate = useNavigate()

  const onAccept = () => {
        //write the logic
    };


  const onReject = () => {
    //write the logic
    };

const onBack = () => {
      navigate(-1)
    };

  return (
    <div >
      <h2 style={{textAlign:'center'}}>Appointment List</h2>
      <hr />
      <div style={{margin:30}}>
      <table className='table table-stripped border-1'>
        <thead>
          <tr>
            <th>App No</th>
            <th>Patients Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Date of Birth</th>
            <th>Time Slot</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { appointments.map((appointment) => 
            <tr key={appointment.appNo}>
              <td>{appointment.appNo}</td>
              <td>{appointment.patientsName}</td>
               <td>{appointment.email}</td>
              <td>{appointment.mobileNo}</td>
              <td>{appointment.dateOfBirth}</td>
              <td>{appointment.timeSlot}</td>
              <td>           
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <button className='btn btn-success' onClick={() => onAccept(appointment.appNo)}>Accept</button>
                    <button className='btn btn-danger' onClick={() => onReject(appointment.appNo)}>Reject</button>            
                </div>   
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <button className='btn btn-warning' onClick={onBack}>Back</button>
      </div>
      </div>
    </div>
  );
};

export default ApproveAppointmentList;