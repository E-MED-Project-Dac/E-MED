import { Outlet } from "react-router-dom";
import DoctorNavbar from "./doctorNavbar";

function DoctorHome(){
return (
    <>
    <DoctorNavbar/>
  <main
  className='xyz'
  style={{ paddingBottom: 60 }}
  >
     <Outlet/>
  </main>
  <footer className='footer'>copyright CDAC@2025 EMED-Project</footer>
    </>
)
}
export default DoctorHome;
