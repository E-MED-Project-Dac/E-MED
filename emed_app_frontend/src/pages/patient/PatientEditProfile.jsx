import { useState } from "react";
import { useNavigate } from "react-router-dom";
function PatientEditProfile() {
  // create state members
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showDob, setShowDob] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };

  const onUpdate = async () => {
    //write the logic
  };

  return (
    <div className="container">
      <h2 className="page-header">Edit Profile</h2>
      <div className="form">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="form-control"
              value={firstName}
            />
          </div>
          <div className="col">
            <label htmlFor="">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="form-control"
              value={lastName}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              value={email}
            />
          </div>
          <div className="col">
            <label htmlFor="">Phone Number</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              className="form-control"
              value={phone}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              value={password}
            />
          </div>
          <div className="col">
            <label htmlFor="">Date of birth</label>
            <input
              onChange={(e) => setShowDob(e.target.value)}
              type="date"
              className="form-control"
              value={showDob}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              name="gender"
              id="genderselect"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="col">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              id="state"
              type="password"
              className="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">City</label>
            <input
              onChange={(e) => setCity(e.target.value)}
              type="password"
              className="form-control"
              value={city}
            />
          </div>
          <div className="col">
            <label htmlFor="">Pincode</label>
            <input
              onChange={(e) => setPincode(e.target.value)}
              type="text"
              className="form-control"
              value={pincode}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">Address</label>
            <textarea
              name=""
              className="form-control"
              rows={2}
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
        </div>

        <div
          className="mb-3"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="mb-3">
            <button onClick={onBack} className="btn btn-danger">
              Cancel
            </button>
          </div>
          <div className="mb-3">
            <button onClick={onUpdate} className="btn btn-success">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PatientEditProfile;
