import React, { useEffect, useState } from "react";
import "./DoctorEdit.css";
import { useNavigate, useParams } from "react-router-dom";
import { updateAvailability } from "../../services/doctor";
import { toast } from "react-toastify";

function EditAvailability() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const { doctorId } = useParams();
  const [formData, setFormData] = useState({
    availableDays: [],
    startTime: "",
    endTime: "",
    consultantFee: ""
  });
  const navigate = useNavigate();

  // Initialize with default values
  useEffect(() => {
    setFormData({
      availableDays: [],
      startTime: "09:00",
      endTime: "17:00",
      consultantFee: "500"
    });
  }, []);

  const handleCheckboxChange = (day) => {
    setFormData(prev => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter(d => d !== day)
        : [...prev.availableDays, day]
    }));
  };

  const onBack = () => navigate(-1);

  const onSubmit = async () => {
    try {
      const result = await updateAvailability({
        doctorId,
        ...formData
      });
      toast.success("Availability updated successfully!");
      navigate("/doctorHome");
    } catch (error) {
      toast.error(error.message || "Failed to update availability");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <div className="card">
          <div className="card-header text-center">
            Edit Availability/Time Slot/Consultant Fee
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <label>Select Availability:</label>
              <div className="d-flex flex-wrap gap-3 mt-2">
                {days.map(day => (
                  <div key={day} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={day}
                      checked={formData.availableDays.includes(day)}
                      onChange={() => handleCheckboxChange(day)}
                    />
                    <label className="form-check-label" htmlFor={day}>{day}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label>Time Slot:</label>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="time"
                      className="form-control"
                      value={formData.startTime}
                      onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="time"
                      className="form-control"
                      value={formData.endTime}
                      onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <label>Consultant Fee:</label>
              <input
                type="number"
                className="form-control"
                value={formData.consultantFee}
                onChange={(e) => setFormData({...formData, consultantFee: e.target.value})}
              />
            </div>

            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-danger" onClick={onBack}>
                Cancel
              </button>
              <button className="btn btn-success" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAvailability;