import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllAppointments as GetAllAppointmentsFromServer } from "../../services/patient";
import { toast } from "react-toastify";
function AppointmentHistory(){

const [appointments, setAppointments] = useState([]);
const {patientId} = useParams()
const navigate = useNavigate()
const onBack = () => {
    navigate(-1)
}

const GetAllAppointments = async() => {
         try {
            const result = await GetAllAppointmentsFromServer(patientId);
          if (!result) {
            throw new Error('No response from server');
          }
    
          if (result.status === 200) {
            setAppointments(result.data);
          } else {
            throw new Error(result.error || 'Failed to load appointments');
          }
        } catch (error) {
          toast.error(error.message);
        }
  }


  useEffect(()=>{
    GetAllAppointments();
  },[])
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
            {/* <th>Doctor Name</th> */}
            <th>Date of Appointment</th>
            <th>Time Slot</th>
            {/* <th>Fees</th> */}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { appointments.map((appointment) => 
            <tr key={appointment.appointmentId}>
              <td>{appointment.appointmentId}</td>
              <td>{appointment.firstName+" "+appointment.lastName}</td>
              {/* <td>{appointment.doctorName}</td> */}
              <td>{appointment.dateOfAppointment}</td>
              <td>{appointment.timeSlot}</td>
              {/* <td>{appointment.fees}</td> */}
              <td>{appointment.status}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <button className="btn btn-secondary" onClick={onBack}>
         Back
        </button>
      </div>
      </div>
    </div>
  );
}
export default AppointmentHistory;