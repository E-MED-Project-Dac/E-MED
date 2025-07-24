import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Register() {
  // create state members
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('')
  const [showDob, setShowDob] = useState('')
  const [gender, setGender] = useState('')
  // get the navigate function reference
  const navigate = useNavigate()

  const onBack = () => {
    // use back stack (which is implemented by browser)
    // -1: previous screen
    navigate(-1)
  }

  // click event handler
  const onRegister = async () => {
   //write the logic
  }

  return (
    <>
  <div className="card-header"
    style={{textAlign:'center',height:40, paddingTop:4}}>
         <h3><b> Welcome to EMED </b></h3>
     </div>
    <div className='container'>
      <h2 className='page-header'>Register</h2>
      <div className='form'>
        <div className='mb-3'>
          <label htmlFor=''>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
            value={firstName}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
            value={lastName}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
            value={email}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='form-control'
            value={phone}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
            value={password}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
            value={confirmPassword}
          />
        </div>
           <div className='mb-3'>
          <label htmlFor=''>Date of birth</label>
          <input
            onChange={(e) => setShowDob(e.target.value)}
            type='date'
            className='form-control'
            value={showDob}
          />
        </div>
       <div className='mb-3'>
         <label htmlFor="gender" className='form-label'>Gender</label>
         <select className='form-select' name="gender" id="genderselect" value={gender} onChange={(e) => setGender(e.target.value) }>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
           <option value="Others">Others</option>
         </select>
        </div>
       <div className='mb-3'>
         <label htmlFor="roleSelect" className='form-label'>Role</label>
         <select className='form-select' name="role" id="roleSelect" onChange={(e) => setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
         </select>
        </div>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
          <div className='mb-3'>
            Already have an account?{' '}
            <button
              onClick={onBack}
              className='btn btn-link'
            >
              Login here
            </button>
          </div>
          <div className='mb-3'>
          <button
            onClick={onRegister}
            className='btn btn-success'
          >
            Register
          </button>
        </div>
       </div>
      </div>
   <footer className="footer"> copyright CDAC@2025 EMED-Project <a href="/aboutUs" style={{marginRight:30,marginLeft:20}}>About-Us</a> <a href="/contectUs">Contact-Us</a></footer>
  </div>
  </>
  )
}

export default Register;