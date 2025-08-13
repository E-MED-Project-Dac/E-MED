import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/user";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth.context";

function Login() {
  // create state to get input from user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors , setErrors] = useState({});
  const { setUser } = useAuth();
  const validateForm = () => {
  const errors = {};
  
  // Required fields
  if (!email.trim()) errors.email = "Email required";
  if (!password) errors.password = "Password required"; 
  // Email format
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Invalid email format";
  }
  return errors;
};
  // get navigate function reference
  const navigate = useNavigate();

  // button click event handler
  const onLogin = async () => {
    // write logic
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
        // Show all validation errors at once
        Object.values(formErrors).forEach(error => toast.warn(error));
        return;
      }

      try{
        const result = await login(email , password);
         setUser({
                id: result.id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                role: result.role,
                token: result.jwt // Storing JWT token
            });
        toast.success('login successfull');
        if(result.role=="ROLE_ADMIN"){
            navigate('/adminHome/approveDoctors')
        }else if(result.role=="ROLE_DOCTOR"){
            navigate('/doctorHome/acceptedAppointments')
        }else{
             navigate('/patientHome/doctorsList')
        }

      }catch (error) {
        // Handle API errors
        toast.error(error.error)
      }

  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{ maxWidth: "1000px", width: "90%" }}
      >
        <div
          className="card-header text-center py-3 border-0"
          style={{
            background: "linear-gradient(45deg, #28a745, #20c997)",
            color: "white",
          }}
        >
          <h3 className="mb-0 fw-bold">
            <i className="fas fa-heartbeat me-2"></i>
            Welcome to EMED
          </h3>
        </div>

        <div className="card-body p-0">
          <div className="row g-0 min-vh-50">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="p-5 w-100">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-dark mb-2">Sign In</h2>
                  <p className="text-muted">
                    Enter your credentials to access your account
                  </p>
                </div>

                <form>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      Email Address
                    </label>
                    <input
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control form-control-lg border-2"
                      placeholder="Enter your email"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="form-label fw-semibold"
                    >
                      <i className="fas fa-lock me-2 text-primary"></i>
                      Password
                    </label>
                    <input
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control form-control-lg border-2"
                      placeholder="Enter your password"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={onLogin}
                    className="btn btn-success btn-lg w-100 mb-3"
                    style={{
                      borderRadius: "10px",
                      background: "linear-gradient(45deg, #28a745, #20c997)",
                      border: "none",
                    }}
                  >
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Sign In
                  </button>

                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="text-primary fw-semibold text-decoration-none"
                        style={{ color: "#28a745 !important" }}
                      >
                        Register here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1))",
                minHeight: "500px",
              }}
            >
              <div className="text-center p-4">
                <img
                  src="/src/doctorImage.png"
                  alt="Medical consultation"
                  className="img-fluid rounded-3 shadow-lg"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="mt-4">
                  <h4 className="text-dark fw-bold">Professional Healthcare</h4>
                  <p className="text-muted">
                    Connect with certified doctors and manage your health
                    records securely
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
