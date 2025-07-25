import { useNavigate } from "react-router-dom";
import { useState } from "react";
function RescheduleAppointment(){

const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [email, setEmail] = useState('')
      const [phone, setPhone] = useState('')
      const [showDob, setShowDob] = useState('')
      const [gender, setGender] = useState('')
      const [appointmentDate, setAppointmentDate] = useState('')
      const [timeSlot, setTimeSlot] = useState('')

    const navigate = useNavigate()

    const onCancel = () => {
        navigate(-1)
    }

    const onReschedule = () => {
       //write logic
    }

return (
    <div className='container'>
      <h2 className='page-header'>Edit Profile</h2>
      <div className='form'>
        <div className="row mb-3">
          <div className="col">
          <label htmlFor=''>First Name</label>
          <input
            readOnly
            type='text'
            className='form-control'
            value={firstName}
          />
        </div>
        <div className="col">
          <label htmlFor=''>Last Name</label>
          <input
            readOnly
            type='text'
            className='form-control'
            value={lastName}
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
            value={email}
          />
        </div>
        <div className='col'>
          <label htmlFor=''>Phone Number</label>
          <input
            readOnly
            type='tel'
            className='form-control'
            value={phone}
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
            value={showDob}
          />
        </div>
       <div className='col'>
          <label htmlFor=''>Gender</label>
          <input
            readOnly
            type='text'
            className='form-control'
            value={gender}
          />
        </div>
        </div>
         <div className='mb-3'>
          <label htmlFor=''>Appointment Date</label>
          <input
            onChange={(e) => setAppointmentDate(e.target.value)}
            type='date'
            className='form-control'
            value={appointmentDate}
          />
        </div>
         <div className='mb-3'>
         <label htmlFor="timeSlot" className='form-label'>Time Slot</label>
         <select className='form-select' name="timeSlot" id="timeSlotSelect" value={timeSlot} onChange={(e) =>setTimeSlot(e.target.value) }>
          <option value="">08:00 - 08:15</option>
          <option value="">08:15 - 08:30</option>
          <option value="">08:30 - 08:45</option>
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