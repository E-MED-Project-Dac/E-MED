import { useContext, useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { UpdatePatient as UpdatePatientFromServer } from "../../services/patient";
import { AuthContext } from "../../context/auth.context";
function PatientEditProfile() {
  // create state members
    const { user } = useContext(AuthContext);
  const location = useLocation();
  const { patient } = location.state || {};
  const [errors , setErrors] = useState({})
  const [editPatient , setEditPatient] = useState({
      patientId: patient.patientId,
      firstName: patient.firstName,
      lastName: patient.lastName,
      mobile: patient.mobile,
      dob: patient.dob,
      gender: patient.gender,
      address: {
        state: patient.address ?.state|| '',
        city: patient.address ?.city || '',
        pincode: patient.address ?.pincode || '',
        localAddress: patient.address ?.localAddress || ''
  }})



  const navigate = useNavigate();
    const onBack = () => {
      navigate(-1);
    };


  const validateForm = () => {
  const errors = {};
  
  // Required fields
  if (!patient.firstName.trim()) errors.firstName = "First name required";
  if (!patient.lastName.trim()) errors.lastName = "Last name required";
  if (!patient.mobile.trim()) errors.mobile = "Mobile required";
  if (!patient.dob) errors.password = "Date of Birth required";
  if (!patient.gender.trim()) errors.gender = "Gender required";
  
  return errors;
};

  const onUpdate = async () => {
    //write the logic
    const formErrors = validateForm();
        setErrors(formErrors);
    
        if (Object.keys(formErrors).length > 0) {
        // Show all validation errors at once
        Object.values(formErrors).forEach(error => toast.warn(error));
        return;
      }
      try {
              const result = await UpdatePatientFromServer(editPatient , user?.token);
              // Handle successful updation
              if(!result){
              toast.error('error while  updating the user')
            }else{
              if(result['status'] === 200){
                toast.success('successfully updated a user')
                navigate(-1)
              }else{
                 toast.error('Error while updating the user')
              }
            } 
          }catch (error) {
              // Handle API errors
              console.error('updation failed:', error);
            }
  };

  return (
    <div className="container">
      <h2 className="page-header">Edit Profile</h2>
      <div className="form">
         <div className="mb-3">
            <input
              hidden
              type="text"
              className="form-control"
              value={editPatient.patientId}
              onChange={(e) => setEditPatient(prev => ({
                                 ...prev,
                                patientId: e.target.value
                              }))}
            />
          </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">First Name</label>
            <input
             onChange={(e) => setEditPatient(prev => ({
                                 ...prev,
                                firstName: e.target.value
                              }))}
              type="text"
              className="form-control"
              value={editPatient.firstName}
            />
          </div>
          <div className="col">
            <label htmlFor="">Last Name</label>
            <input
             onChange={(e) => setEditPatient(prev => ({
                                 ...prev,
                                lastName: e.target.value
                              }))}
              type="text"
              className="form-control"
              value={editPatient.lastName}
            />
          </div>
        </div>
        <div className="row mb-3">
            <div className="col">
            <label htmlFor="">Date of birth</label>
            <input
             onChange={(e) => setEditPatient(prev => ({
                                 ...prev,
                                dob: e.target.value
                              }))}
              type="date"
              className="form-control"
              value={editPatient.dob}
            />
          </div>
          <div className="col">
            <label htmlFor="">Phone Number</label>
            <input
              onChange={(e) => setEditPatient(prev => ({
                                 ...prev,
                                mobile: e.target.value
                              }))}
              type="tel"
              className="form-control"
              value={editPatient.mobile}
            />
          </div>
        </div>
        {/* <div className="row mb-3">
           <div className="col">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              value={patient.email}
            />
          </div>
          <div className="col">
            <label htmlFor="">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              value={password}
            />
          </div>
        </div> */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              name="gender"
              id="genderselect"
              value={editPatient.gender}
              onChange={(e) => setEditPatient(prev => ({
                                 ...prev,
                                gender: e.target.value
                              }))}
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Others</option>
            </select>
          </div>

          <div className="col">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              id="state"
              type="text"
              className="form-control"
              value={editPatient.address.state}
              onChange={(e) => setEditPatient(prev => ({
                               ...prev,
                               address: {
                               ...prev.address,
                               state: e.target.value
                                }
                              }))}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">City</label>
            <input
              type="text"
              className="form-control"
              value={editPatient.address.city}
              onChange={(e) => setEditPatient(prev => ({
                               ...prev,
                               address: {
                               ...prev.address,
                               city: e.target.value
                                }
                              }))}
            />
          </div>
          <div className="col">
            <label htmlFor="">Pincode</label>
            <input
              type="text"
              className="form-control"
              value={editPatient.address.pincode}
              onChange={(e) => setEditPatient(prev => ({
                               ...prev,
                               address: {
                               ...prev.address,
                               pincode: e.target.value
                                }
                              }))}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">"Local Address</label>
            <textarea
              name=""
              className="form-control"
              rows={2}
              type="text"
              value={editPatient.address.localAddress}
              onChange={(e) => setEditPatient(prev => ({
                               ...prev,
                               address: {
                               ...prev.address,
                               localAddress: e.target.value
                                }
                              }))}
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
