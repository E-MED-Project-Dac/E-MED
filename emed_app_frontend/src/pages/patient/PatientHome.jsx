import { Outlet } from 'react-router-dom';
import PatientNavbar from './PatientNavbar';
function PatientHome(){
  return(
<>
  <PatientNavbar/>
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
export default PatientHome;