import { Link, useNavigate } from "react-router-dom";

function DoctorNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-5" to="/home">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-4 fs-5">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/appointment">
                Appointment
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <Link className="btn btn-outline-light px-4" to="/home/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}
export default DoctorNavbar;
