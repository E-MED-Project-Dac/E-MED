import React from "react";
import "./DoctorEdit.css";
import { useNavigate } from "react-router-dom";
function EditAvailability() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="card">
            <div className="card-header" style={{ textAlign: "center" }}>
              Edit Availability/ Time Slot/ Consultant Fee
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col custom-select-wrapper">
                  <label htmlFor="">Availability</label>
                  <br />
                  <select className="form-control custom-select">
                    <option value="">Select Availability</option>
                    <option value="">Monday</option>
                    <option value="">Tuesday</option>
                    <option value="">Wednesday</option>
                    <option value="">Thursday</option>
                    <option value="">Friday</option>
                    <option value="">Saturday</option>
                    <option value="">Sunday</option>
                  </select>
                </div>
                <br />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">Time Slot</label>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        placeholder="Start Time"
                        style={{ width: "100%" }}
                        className="form-control"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        placeholder="End Time"
                        style={{ width: "100%" }}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="">Consultant Fee</label>
                <input
                  type="number"
                  className="form-control"
                  style={{ width: "97%", marginLeft: "10px" }}
                />
              </div>
              <div className="mt-2 d-flex justify-content-between">
                <button
                  className="btn btn-success"
                  style={{ width: "150px" }}
                  onClick={() => {
                    alert("Record Saved Successfully 😃"),
                      navigate("/doctorProfile");
                  }}
                >
                  Submit
                </button>
                <button
                  className="btn btn-danger"
                  style={{ width: "150px" }}
                  onClick={() => {
                    alert("Are you Sure You Want To Cancel ?"),
                      navigate("/doctorProfile");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditAvailability;
