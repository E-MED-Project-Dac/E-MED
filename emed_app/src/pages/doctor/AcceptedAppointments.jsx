import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AcceptedAppointments() {
  const [Patientappointments, setPatientAppointment] = useState([
    {
      patientName: "Vikram Joshi",
      age: 50,
      gender: "Male",
      doctorName: "Dr. Gurvinder",
      date: "21-10-2025",
      timeSlot: "04:45 PM",
      fee: "1000",
      status: "accepted",
    },
    {
      patientName: "Ananya Reddy",
      age: 19,
      gender: "Female",
      doctorName: "Dr. Pulkit",
      date: "21-10-2025",
      timeSlot: "01:00 PM",
      fee: "1000",
      status: "accepted",
    },
    {
      patientName: "Sanjay Verma",
      age: 38,
      gender: "Male",
      doctorName: "Dr. Saransh",
      date: "21-10-2025",
      timeSlot: "03:30 PM",
      fee: "1000",
      status: "accepted",
    },
    {
      patientName: "Pooja Mehta",
      age: 27,
      gender: "Female",
      doctorName: "Dr. Adarsh",
      date: "21-10-2025",
      timeSlot: "11:00 AM",
      fee: "1000",
      status: "accepted",
    },
  ]);
  const navigate = useNavigate();
  const onInfo = (appNo) => {
    //write logic
  };
  const onBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Accepted Appointments List</h2>
      <hr />
      <div style={{ margin: 30 }}>
        <table className="table table-stripped border-1">
          <thead>
            <tr>
              <th>Patients Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Patientappointments.map((appointment) => (
              <tr key={appointment.appNo}>
                <td>{appointment.patientName}</td>
                <td>{appointment.age}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.date}</td>
                <td>{appointment.timeSlot}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-info"
                      onClick={() => onInfo(appointment.appNo)}
                    >
                      View Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button
            className="btn btn-warning"
            onClick={onBack}
            // style={{ marginRight: "100px" }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcceptedAppointments;
