import { Link } from 'react-router-dom'
function PatientNavbar(){
  return (
     <nav className='navbar navbar-expand-lg bg-success' data-bs-theme='dark'>
     <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='/home'
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
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/profile'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/doctorsList'
              >
                Doctor's List
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/myAppointment'
              >
                My Appointment
              </Link>
            </li>
            <li className='nav-item'>
              <button
                className='btn'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default PatientNavbar

