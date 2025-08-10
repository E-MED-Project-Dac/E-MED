import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services/user";

function Register() {
  // create state members
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [errors , setErrors] = useState({});

  const validateForm = () => {
  const errors = {};
  
  // Required fields
  if (!firstName.trim()) errors.firstName = "First name required";
  if (!lastName.trim()) errors.lastName = "Last name required";
  if (!email.trim()) errors.email = "Email required";
  if (!mobile.trim()) errors.mobile = "Mobile required";
  if (!password) errors.password = "Password required";
  if (password !== confirmPassword) errors.confirmPassword = "Passwords don't match";
   if (!gender.trim()) errors.gender = "Gender required";
  if (!role.trim()) errors.role = "Role required";
  
  // Email format
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Invalid email format";
  }
  
  // Password strength (min 8 chars)
  if (password && password.length < 8) {
    errors.password = "Password must be 8+ characters";
  }
  
  return errors;
};

  // get the navigate function reference
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  // click event handler
  const onRegister = async () => {
    // write the logic
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
    // Show all validation errors at once
    Object.values(formErrors).forEach(error => toast.warn(error));
    return;
  }

      // No errors - proceed with registration
      try {
        const result = await register(
          firstName, lastName, email, mobile, 
          password, dob, gender, role
        );
        // Handle successful registration
        if(!result){
        toast.error('error while  registering the user')
      }else{
        if(result['status'] == 201){
          toast.success('successfully registered a user')
          navigate(-1)
        }else{
           toast.error('Error while registering the user')
        }
      } 
    }catch (error) {
        // Handle API errors
        console.error('Registration failed:', error);
      }
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
                  First Name
                </label>
                <input
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control form-control-lg border-2"
                  placeholder="Enter first name"
                  required
                  value={firstName}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label fw-semibold">
                  Last Name
                </label>
                <input
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="form-control form-control-lg border-2"
                  placeholder="Enter last name"
                  required
                  value={lastName}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control form-control-lg border-2"
                  placeholder="Enter email address"
                  required
                  value={email}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label fw-semibold">
                  Mobile Number
                </label>
                <input
                  id="phone"
                  onChange={(e) => setMobile(e.target.value)}
                  type="tel"
                  className="form-control form-control-lg border-2"
                  placeholder="Enter phone number"
                  required
                  value={mobile}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control form-control-lg border-2"
                  placeholder="Create password"
                  required
                  value={password}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fw-semibold"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="form-control form-control-lg border-2"
                  placeholder="Confirm password"
                  required
                  value={confirmPassword}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="dob" className="form-label fw-semibold">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  className="form-control form-control-lg border-2"
                  required
                  value={dob}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="gender" className="form-label fw-semibold">
                  Gender
                </label>
                <select
                  className="form-select form-select-lg border-2"
                  id="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={{ borderRadius: "10px" }}
                >
                  <option value="" disabled hidden>Select Gender</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="form-label fw-semibold">
                Register As
              </label>
              <select
                className="form-select form-select-lg border-2"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ borderRadius: "10px" }}
              >
                <option value="" 
                disabled hidden>
                  Select Role
                  </option>
                <option value="PATIENT">
                  PATIENT
                </option>
                <option value="DOCTOR">
                  DOCTOR
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
