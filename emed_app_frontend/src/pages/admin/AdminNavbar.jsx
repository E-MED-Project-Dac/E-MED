import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
function AdminNavbar(){
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext);
    const onLogout = () => {
        //write logic
        setUser(null);
        navigate('/')
    }
return (
    <nav className='navbar navbar-expand-lg bg-success' data-bs-theme='dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/adminHome/approveDoctors'>
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
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav gap-4 fs-5'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/adminHome/adminProfile'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/adminHome/allDoctorsList'
              >
               DoctorsList
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/adminHome/addNewAdmin'
              >
               Add New Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                aria-current="page" 
                to="/aboutUs"
              >
                About-Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                aria-current="page" 
                to="/contectUs"
              >
                Contact-Us
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
export default AdminNavbar;