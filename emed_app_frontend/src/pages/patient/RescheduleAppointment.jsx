import { useNavigate } from "react-router-dom";
import { useState , useEffect, useContext } from "react";
import { getAppointment as getAppointmentFromServer} from "../../services/patient";
import { RescheduleAppointment as RescheduleAppointmentFromServer } from "../../services/patient";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/auth.context";

function RescheduleAppointment(){

    const { user } = useContext(AuthContext);
const [errors , setErrors] = useState({});
const [appointment, setAppointment] = useState({
  appointmentId: '',
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  dob: '',
  gender: '',
  dateOfAppointment: '',
  timeSlot: '' 
})
const { appointmentId } = useParams();
const navigate = useNavigate()

    const onCancel = () => {
        navigate(-1)
    }

    const validateForm = () => {
      const errors = {};
  
  // Required fields
  if (!appointment.dateOfAppointment.trim()) errors.dateOfAppointment = "appointment date is required";
  if (!appointment.timeSlot.trim()) errors.timeSlot = "time slot is required";
   return errors;
}


    const onReschedule = async() => {
       //write logic
      const formErrors = validateForm();
                setErrors(formErrors);
      
                if (Object.keys(formErrors).length > 0) {
                    // Show all validation errors at once
                    Object.values(formErrors).forEach(error => toast.warn(error));
                    return;
                  }
                try {
                        const result = await RescheduleAppointmentFromServer(appointment , user?.token);
                        // Handle successful registration
                        if(!result){
                        toast.error('error while  reschedulling appointment')
                      }else{
                        if(result['status'] == 200){
                          toast.success('successfully rescheduled an appointment')
                          navigate(-1)
                        }else{
                           toast.error('Error while reschedulling  appointment')
                        }
                      } 
                    }catch (error) {
                        // Handle API errors
                        console.error('reschedulling failed:', error);
                      }
                
    }

    const getAppointment = async(appointmentId) =>{
      const result = await getAppointmentFromServer(appointmentId , user?.token)
              if (!result) {
                toast.error('Error while loading  Appointment')
              } else {
                if (result['status'] == 200) {
                  setAppointment(result['data'])
                } else {
                  toast.error(result['error'])
                }
              }
    }

    useEffect(() => {
            getAppointment(appointmentId);
    },[])

return (
    <div className='container'>
      <h2 className='page-header'>Reschedule Appointment</h2>
      <div className='form'>
         <div className="mb-3">
          <input
            readOnly
            hidden
            type='text'
            className='form-control'
            value={appointment.appointmentId}
          />
        </div>
        <div className="row mb-3">
          <div className="col">
          <label htmlFor=''>First Name</label>
          <input
            readOnly
            type='text'
            className='form-control'
            value={appointment.firstName}
          />
        </div>
        <div className="col">
          <label htmlFor=''>Last Name</label>
          <input
            readOnly
            type='text'
            className='form-control'
            value={appointment.lastName}
          />
        </div>
        </div>
        <div className="row mb-3">
        <div className='col'>
          <label htmlFor=''>Email</label>
          <input
            readOnly
            type='email'
            className='form-control'
            value={appointment.email}
          />
        </div>
        <div className='col'>
          <label htmlFor=''>Phone Number</label>
          <input
            readOnly
            type='tel'
            className='form-control'
            value={appointment.mobile}
          />
        </div>
        </div>
        <div className="row mb-3">
        <div className='col'>
          <label htmlFor=''>Date of birth</label>
          <input
            readOnly
            type='date'
            className='form-control'
            value={appointment.dob}
          />
        </div>
       <div className='col'>
          <label htmlFor=''>Gender</label>
          <input
            readOnly
            type='text'
            className='form-control'
            value={appointment.gender}
          />
        </div>
        </div>
         <div className='mb-3'>
          <label htmlFor=''>Appointment Date</label>
          <input
            onChange={(e) => setAppointment(prev => ({
                             ...prev,
                             dateOfAppointment: e.target.value
                             }))}
            type='date'
            className='form-control'
            value={appointment.dateOfAppointment}
          />
        </div>
         <div className='mb-3'>
         <label htmlFor="timeSlot" className='form-label'>Time Slot</label>
         <select className='form-select' 
         name="timeSlot" id="timeSlotSelect" 
         value={appointment.timeSlot} 
         onChange={(e) => setAppointment(prev => ({
                           ...prev,
                          timeSlot: e.target.value
            })) }>
          <option value="08:00 - 08:15">08:00 - 08:15</option>
          <option value="08:15 - 08:30">08:15 - 08:30</option>
          <option value="08:30 - 08:45">08:30 - 08:45</option>
         </select>
        </div>
        <div className='mb-3' style={{display:"flex" , justifyContent:"space-between"}}>
          <div className='mb-3'>
            <button
              onClick={onCancel}
              className='btn btn-danger'
            >
              Cancel
            </button>
          </div>
          <div className="mb-3">
          <button
            onClick={onReschedule}
            className='btn btn-success'
          >
            Reschedule
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RescheduleAppointment;