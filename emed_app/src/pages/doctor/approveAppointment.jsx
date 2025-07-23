import React, { useState } from 'react';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([
    //dummy data 
    { appNo: 1, patientsName: 'John Doe', mobileNo: '1234567890', dateOfBirth: '1990-01-01', timeSlot: '10:00 AM', status: '' },
    { appNo: 2, patientsName: 'Jane Doe', mobileNo: '0987654321', dateOfBirth: '1995-05-05', timeSlot: '11:00 AM', status: '' },
     { appNo: 3, patientsName: 'John Doe', mobileNo: '1234567890', dateOfBirth: '1990-01-01', timeSlot: '10:00 AM', status: 'accepted' },
    { appNo: 4, patientsName: 'Jane Doe', mobileNo: '0987654321', dateOfBirth: '1995-05-05', timeSlot: '11:00 AM', status: 'rejected' },
  ]);

  const onAccept = () => {
        
    };


  const onReject = () => {
    };

  return (
    <div>
      <h2>Appointment List</h2>
      <table className='table table-stripped border-1'>
        <thead>
          <tr>
            <th>App No</th>
            <th>Patients Name</th>
            <th>Mobile No</th>
            <th>Date of Birth</th>
            <th>Time Slot</th>
            <th colSpan={2}>Status</th>
          </tr>
        </thead>
        <tbody>
          { appointments.map((appointment) => 
            <tr key={appointment.appNo}>
              <td>{appointment.appNo}</td>
              <td>{appointment.patientsName}</td>
              <td>{appointment.mobileNo}</td>
              <td>{appointment.dateOfBirth}</td>
              <td>{appointment.timeSlot}</td>
              <td>           
                    <button style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }} onClick={() => onAccept(appointment.appNo)}>Accept</button>
                    <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => onReject(appointment.appNo)}>Reject</button>               
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;