import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  // create state members
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [showDob, setShowDob] = useState("");
  const [gender, setGender] = useState("");

  // get the navigate function reference
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  // click event handler
  const onRegister = async () => {
    // write the logic
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-4"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{ maxWidth: "800px", width: "90%" }}
      >
        <div
          className="card-header text-center py-3 border-0"
          style={{
            background: "linear-gradient(45deg, #28a745, #20c997)",
            color: "white",
          }}
        >
          <h3 className="mb-0 fw-bold">
            <i className="fas fa-user-plus me-2"></i>
            Welcome to EMED
          </h3>
        </div>

        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark mb-2">Create Account</h2>
            <p className="text-muted">Join our healthcare community today</p>
          </div>

          <form>
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label fw-semibold">
                  <i className="fas fa-user me-2 text-primary"></i>
                  First Name
                </label>
                <input
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control form-control-lg border-2"
                  placeholder="Enter first name"
                  value={firstName}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label fw-semibold">
                  <i className="fas fa-user me-2 text-primary"></i>
                  Last Name
                </label>
                <input
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="form-control form-control-lg border-2"
                  placeholder="Enter last name"
                  value={lastName}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label fw-semibold">
                  <i className="fas fa-envelope me-2 text-primary"></i>
                  Email Address
                </label>
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control form-control-lg border-2"
                  placeholder="Enter email address"
                  value={email}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label fw-semibold">
                  <i className="fas fa-phone me-2 text-primary"></i>
                  Phone Number
                </label>
                <input
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="form-control form-control-lg border-2"
                  placeholder="Enter phone number"
                  value={phone}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label fw-semibold">
                  <i className="fas fa-lock me-2 text-primary"></i>
                  Password
                </label>
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control form-control-lg border-2"
                  placeholder="Create password"
                  value={password}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fw-semibold"
                >
                  <i className="fas fa-lock me-2 text-primary"></i>
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="form-control form-control-lg border-2"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="dob" className="form-label fw-semibold">
                  <i className="fas fa-calendar me-2 text-primary"></i>
                  Date of Birth
                </label>
                <input
                  id="dob"
                  onChange={(e) => setShowDob(e.target.value)}
                  type="date"
                  className="form-control form-control-lg border-2"
                  value={showDob}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="gender" className="form-label fw-semibold">
                  <i className="fas fa-venus-mars me-2 text-primary"></i>
                  Gender
                </label>
                <select
                  className="form-select form-select-lg border-2"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={{ borderRadius: "10px" }}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="form-label fw-semibold">
                <i className="fas fa-user-md me-2 text-primary"></i>
                Register As
              </label>
              <select
                className="form-select form-select-lg border-2"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ borderRadius: "10px" }}
              >
                <option value="patient">
                  <i className="fas fa-user me-2"></i>
                  Patient
                </option>
                <option value="doctor">
                  <i className="fas fa-user-md me-2"></i>
                  Doctor
                </option>
              </select>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="text-muted">Already have an account? </span>
                <button
                  type="button"
                  onClick={onBack}
                  className="btn btn-link p-0 text-decoration-none fw-semibold"
                  style={{ color: "#28a745" }}
                >
                  Login here
                </button>
              </div>
              <button
                type="button"
                onClick={onRegister}
                className="btn btn-success btn-lg px-5"
                style={{
                  borderRadius: "10px",
                  background: "linear-gradient(45deg, #28a745, #20c997)",
                  border: "none",
                }}
              >
                <i className="fas fa-user-plus me-2"></i>
                Create Account
              </button>
            </div>
            <div className="text-center">
              <small className="text-muted">
                By registering, you agree to our{" "}
                <a href="#" className="text-primary text-decoration-none">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary text-decoration-none">
                  Privacy Policy
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
