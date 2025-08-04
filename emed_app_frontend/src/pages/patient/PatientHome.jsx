import { Outlet } from "react-router-dom";
import PatientNavbar from "./PatientNavbar";
import Footer from "./Footer";
function PatientHome() {
  return (
    <div className="patient-home-container">
      <PatientNavbar />
      <main className="xyz" style={{ paddingBottom: 10 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default PatientHome;
