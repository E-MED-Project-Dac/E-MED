import React, { useState } from "react";
import "./DoctorEdit.css";
import { useNavigate } from "react-router-dom";
function EditAvailability() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [availability, setAvailability] = useState([]);

  const handleCheckboxChange = (day) => {
    setAvailability((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onSubmit = () => {
    // write logic here
  };
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
                <label>Select Availability:</label>
                <div className="d-flex flex-wrap gap-9 mt-2">
                  {days.map((day) => (
                    <div key={day} className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={day}
                        checked={availability.includes(day)}
                        onChange={() => handleCheckboxChange(day)}
                      />
                      <label className="form-check-label" htmlFor={day}>
                        {day}
                      </label>
                    </div>
                  ))}
                </div>
                <br />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="">Time Slot:</label>
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
                <label htmlFor="">Consultant Fee:</label>
                <input
                  type="number"
                  className="form-control"
                  style={{ width: "97%", marginLeft: "10px" }}
                />
              </div>
              <div className="mt-2 d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  onClick={onBack}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-success"
                  onClick={onSubmit}
                >
                  Submit
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
