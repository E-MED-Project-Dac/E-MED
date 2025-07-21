function Register() {
  // create state members
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('')
  // get the navigate function reference
  const navigate = useNavigate()

  const onBack = () => {
    // use back stack (which is implemented by browser)
    // -1: previous screen
    navigate(-1)
  }

  // click event handler
  const onRegister = async () => {
    if (firstName.length == 0) {
      toast.warn('please enter first name')
    } else if (lastName.length == 0) {
      toast.warn('please enter last name')
    } else if (email.length == 0) {
      toast.warn('please enter email')
    } else if (phone.length == 0) {
      toast.warn('please enter phone number')
    } else if (password.length == 0) {
      toast.warn('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warn('please confirm password')
    } else if (password != confirmPassword) {
      toast.warn('password does not match')
    } else {
      const result = await registerUser(
        firstName,
        lastName,
        email,
        phone,
        password,
        role
      )
      if (!result) {
        toast.error('Error while registering the user')
      } else {
        // check if result is "success" or "error"
        if (result['status'] == 'success') {
          toast.success('successfully registered a user')

          // go back
          navigate(-1)
        } else {
          toast.error('Error while registering the user')
        }
      }
    }
  }

  return (
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
         <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
         <ul class="role">
         <li><a class="role-item" href="#">Patient </a></li>
         <li><a class="role-item" href="#">Doctor</a></li>
         <li><a class="role" href="#">Something else here</a></li>
         </ul>
        </div>
        <div className='mb-3'>
          <div className='mb-3'>
            Already have an account?{' '}
            <button
              onClick={onBack}
              className='btn btn-link'
            >
              Login here
            </button>
          </div>
          <button
            onClick={onRegister}
            className='btn btn-success'
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register