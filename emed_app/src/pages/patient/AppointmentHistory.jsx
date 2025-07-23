import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AppointmentHistory(){

     const [appointments, setAppointments] = useState([
        //dummy data 
        { appNo: 1, patientsName: 'John Doe', doctorName: 'roy', dateOfAppointment: '1990-01-01', timeSlot: '10:00 AM', fees:'100' , status: 'accepted' },
        { appNo: 2, patientsName: 'Jane Doe', doctorName: 'roy', dateOfAppointment: '1995-05-05', timeSlot: '11:00 AM', fees:'100' ,status: 'rejected' },
         { appNo: 3, patientsName: 'John Doe', doctorName: 'roy', dateOfAppointment: '1990-01-01', timeSlot: '10:00 AM',fees:'100' , status: 'accepted' },
        { appNo: 4, patientsName: 'Jane Doe', doctorName: 'roy', dateOfAppointment: '1995-05-05', timeSlot: '11:00 AM', fees:'100' ,status: 'rejected' },
      ]);


const navigate = useNavigate()
const onBack = () => {
    navigate(-1)
}

const onDetails = (appNo) => {
    //write logic
}
 return (
    <div >
      <h2 style={{textAlign:'center'}}>Appointment History List</h2>
      <hr />
      <div style={{margin:30}}>
      <table className='table table-stripped border-1'>
        <thead>
          <tr>
            <th>App No</th>
            <th>Patients Name</th>
            <th>Doctor Name</th>
            <th>Date of Appointment</th>
            <th>Time Slot</th>
            <th>Fees</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { appointments.map((appointment) => 
            <tr key={appointment.appNo}>
              <td>{appointment.appNo}</td>
              <td>{appointment.patientsName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.dateOfAppointment}</td>
              <td>{appointment.timeSlot}</td>
              <td>{appointment.fees}</td>
              <td>{appointment.status}</td>
              <td>           
                    <button className="btn btn-info" onClick={() => onDetails(appointment.appNo)}>Details</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <button className="btn btn-warning" onClick={onBack}>
         Back
        </button>
      </div>
      </div>
    </div>
  );
}
export default AppointmentHistory;