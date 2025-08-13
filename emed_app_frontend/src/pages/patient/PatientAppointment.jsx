import React,{ useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cancelAppointment as  cancelAppointmentFromserver, upcomingAppointmentList as upcomingAppointmentListFromServer } from '../../services/patient';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth.context';
const PatientAppointment =()=>{
    const { user } = useContext(AuthContext);
  const [Patientappointments,setPatientAppointment]=useState([]);
  const navigate = useNavigate()
  const onCancle= async(appointmentId) =>{
      //write logic 
      try {
            const result = await cancelAppointmentFromserver(appointmentId , user?.token);
          if (!result) {
            throw new Error('No response from server');
          }
    
          if (result.status === 200) {
           toast.success("Appointment Canceled Successfully");
           upcomingAppointmentList();
          } else {
            throw new Error(result.error || 'Failed to load appointments');
          }
        } catch (error) {
          toast.error(error.message);
        }
  };

   const onReschedule=(appointmentId)=>{
       navigate(`/patientHome/rescheduleAppointment/${appointmentId}`)
  };
  const onHistory=()=>{
      navigate(`/patientHome/appointmentHistory`)
  };

   const onBack= () =>{
       navigate(-1)
  };

  const upcomingAppointmentList = async() => {
         try {
            const result = await upcomingAppointmentListFromServer(user?.id , user?.token);
          if (!result) {
            throw new Error('No response from server');
          }
    
          if (result.status === 200) {
            setPatientAppointment(result.data);
          } else {
            throw new Error(result.error || 'Failed to load appointments');
          }
        } catch (error) {
          toast.error(error.message);
        }
  }

  useEffect(()=>{upcomingAppointmentList()},[])

  return (
    <div >
      <h2 style={{textAlign:'center'}}>Upcoming Appointment List</h2>
      <hr />
      <div style={{margin:30}}>
      <table className='table table-stripped border-1'>
        <thead>
          <tr>
            <th>Patients Name</th>
            <th>dob</th>
            {/* <th>Gender</th> */}
            {/* <th>DoctorName</th> */}
             <th>DateOfAppointment</th>
            <th>Time Slot</th>
            {/* <th>Fees</th> */}
            <th >Status</th>
             <th ></th>
          </tr>
        </thead>
        <tbody>
          { Patientappointments.map((appointment) => 
            <tr key={appointment.appointmentId}>
              <td>{appointment.firstName}</td>
              <td>{appointment.dob}</td>
              {/* <td>{appointment.gender}</td> */}
              {/* <td>{appointment.doctor.firstName}</td> */}
              <td>{appointment.dateOfAppointment}</td>
              <td>{appointment.timeSlot}</td>
              {/* <td>{appointment.fee}</td> */}
               <td>{appointment.status}</td>
              <td>    
                <div  style={{display:'flex', justifyContent:'space-evenly'}}>       
                    <button className='btn btn-danger' onClick={() => onCancle(appointment.appointmentId)}>Cancel</button>
                    <button className='btn btn-primary' onClick={() => onReschedule(appointment.appointmentId)}>Reschedule</button>              
                </div>     
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div style={{display:'flex', justifyContent:'space-between'}}>
       <button className='btn btn-secondary' onClick={onBack}>Back</button>
       <button className='btn btn-info' onClick={onHistory}>History</button>
      </div>
    </div>
   </div>   
  );

};
export default  PatientAppointment;