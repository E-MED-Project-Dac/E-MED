import React from "react";
import "./DoctorEdit.css";
import { useNavigate } from 'react-router-dom';

function DoctorEdit() {
  const navigate = useNavigate()

   const onCancel = () => {
    navigate(-1)
  }

  const onUpdate = () => {
    //write logic
  }
  return (
    <>
      <div className="container">
        <h2 className="page-header">Edit Doctor's Detail</h2>
        <div className="form">
          <div className="card">
            <div className="card-header">Personal Information</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">FirstName</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor="">LastName</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor="">Password</label>
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">Confirm Password</label>
                  <input type="password" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">Other Information Section</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col">
                  <div className="col custom-select-wrapper">
                    <label htmlFor="specialization">Specialization</label>
                    <select
                      id="specialization"
                      className="form-control custom-select"
                    >
                      <option value="">-- Select Specialization --</option>
                      <option value="ortho">Orthology</option>
                      <option value="cardio">Cardiology</option>
                      <option value="neuro">Neurology</option>
                      <option value="derma">Dermatology</option>
                    </select>
                  </div>
                </div>

                <div className="col">
                  <label htmlFor="">Clinic/Hospital Name</label>
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">Qualification</label>
                  <textarea type="text" rows={3} className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor="">Clinic Address</label>
                  <textarea type="text" rows={3} className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">Medical License Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <div className="col custom-select-wrapper">
                    <label htmlFor="city">City</label>
                    <select id="city" className="form-control custom-select">
                      <option value="">-- Select City --</option>
                      <option value="Karad">Karad</option>
                      <option value="Pune">Pune</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Punjab">Punjab</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">Document Section</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">Medical Degree Certificate</label>
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                    />
                    <label className="input-group-text" for="inputGroupFile02">
                      Upload
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">License Verification</label>
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                    />
                    <label className="input-group-text" for="inputGroupFile02">
                      Upload
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 d-flex justify-content-between">
            <button className="btn btn-success" style={{ width: "150px" }} onClick={onUpdate}>
              Update
            </button>
            <button className="btn btn-danger" style={{ width: "150px" }} onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorEdit;
