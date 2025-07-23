import { Link, useNavigate } from 'react-router-dom'
function PatientNavbar(){
  const navigate = useNavigate()

  const onLogout = () => {
    //write logic 
    navigate('/')
  }
  return (
     <nav className='navbar navbar-expand-lg bg-success' data-bs-theme='dark'>
     <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='/patientHome/doctorsList'
        >
          Home
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >
          <ul className='navbar-nav gap-4 fs-5'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/patientHome/patientProfile'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/patientHome/doctorsFilters'
              >
                Doctor's List
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/patientHome/upcomingAppointmentList'
              >
                My Appointment
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                aria-current="page" 
                to="/patientHome/aboutUs"
              >
                About-Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                aria-current="page" 
                to="/patientHome/contectUs"
              >
                Contect-Us
              </Link>
            </li>
            </ul>
            <ul className="navbar-nav ms-auto fs-5">
            <li className='nav-item '>
              <button
                className='btn'
                onClick={onLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default PatientNavbar

