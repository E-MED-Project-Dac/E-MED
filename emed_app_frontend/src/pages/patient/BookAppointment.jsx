import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { BookAppointment as BookAppointmentFromServer, GetPatient as GetPatientFromServer} from "../../services/patient"
import { toast } from "react-toastify";
import { AuthContext } from "../../context/auth.context";
function BookAppointment(){
      const { user } = useContext(AuthContext);
      const { doctorId } = useParams();
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [email, setEmail] = useState('')
      const [mobile, setMobile] = useState('')
      const [dob, setDob] = useState('')
      const [gender, setGender] = useState('')
      const [dateOfAppointment, setDateOfAppointment] = useState('')
      const [timeSlot, setTimeSlot] = useState('')
      const [errors , setErrors] = useState({});
      
      
      const navigate = useNavigate()

      const validateForm = () => {
      const errors = {};
  
  // Required fields
  if (!firstName.trim()) errors.firstName = "First name required";
  if (!lastName.trim()) errors.lastName = "Last name required";
  if (!email.trim()) errors.email = "Email required";
  if (!mobile.trim()) errors.mobile = "Mobile required";
  if (!gender.trim()) errors.gender = "Gender required";
  if (!dob.trim()) errors.dob = "Date of birth required";
  if (!dateOfAppointment.trim()) errors.dateOfAppointment = "appointment date is required";
  if (!timeSlot.trim()) errors.timeSlot = "time slot is required";
  // Email format
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Invalid email format";
  }
   return errors;
}
     

 const GetPatient = async() => {

      const token = user?.token; 
     const result = await GetPatientFromServer(user?.id , token)
         if (!result) {
           toast.error('Error while loading  patient')
         } else {
           if (result['status'] == 200) {
             setFirstName(result.data.firstName )
             setLastName(result.data.lastName)
             setEmail(result.data.email)
             setMobile(result.data.mobile)
             setGender(result.data.gender)
             setDob(result.data.dob)
           } else {
             toast.error(result['error'])
           }
         }
 }


 useEffect(() =>{
     GetPatient()
   },[])
      

      const onCancel = () => {
            navigate(-1)
      }

      const onBook = async(doctorId) => {
           //write logic
           const formErrors = validateForm();
          setErrors(formErrors);

          if (Object.keys(formErrors).length > 0) {
              // Show all validation errors at once
              Object.values(formErrors).forEach(error => toast.warn(error));
              return;
            }
          try {
                  const token = user?.token;
                  const result = await BookAppointmentFromServer(
                    user?.id,
                    firstName, lastName, email, mobile, 
                     dob, gender,dateOfAppointment,timeSlot,
                     doctorId,token
                  );
                  // Handle successful registration
                  if(!result){
                  toast.error('error while  booking appointment')
                }else{
                  if(result['status'] == 201){
                    toast.success('successfully Booked an appointment')
                    navigate(-1)
                  }else{
                     toast.error('Error while Booking  appointment')
                  }
                } 
              }catch (error) {
                  // Handle API errors
                  console.error('booking failed:', error);
                }
          

      }

return (
    <div className='container'>
      <h2 className='page-header'>Book Appointment</h2>
      <div className='form'>
         <div className='mb-3'>
          <input
            readOnly
            type='text'
            className='form-control'
            value={user?.id}
            hidden
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
            value={firstName ||''}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
            value={lastName || ''}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
            value={email || ''}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Phone Number</label>
          <input
            onChange={(e) => setMobile(e.target.value)}
            type='tel'
            className='form-control'
            value={mobile || ''} 
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Date of birth</label>
          <input
            onChange={(e) => setDob(e.target.value)}
            type='date'
            className='form-control'
            value={dob || ''}
          />
        </div>
       <div className='mb-3'>
         <label htmlFor="gender" className='form-label'>Gender</label>
         <select className='form-select' name="gender" id="genderselect" value={gender} onChange={(e) =>setGender(e.target.value) }>
           <option value="" disabled hidden>Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
           <option value="OTHER">Others</option>
         </select>
        </div>
         <div className='mb-3'>
          <label htmlFor=''>Appointment Date</label>
          <input
            onChange={(e) => setDateOfAppointment(e.target.value)}
            type='date'
            className='form-control'
            value={dateOfAppointment || ''}
          />
        </div>
         <div className='mb-3'>
         <label htmlFor="timeSlot" className='form-label'>Time Slot</label>
         <select className='form-select' name="timeSlot" id="timeSlotSelect" value={timeSlot} onChange={(e) =>setTimeSlot(e.target.value) }>
          <option value="" disabled hidden>Select TimeSlot</option>
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
            onClick={() => onBook(doctorId)}
            className='btn btn-success'
          >
            Book
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookAppointment;