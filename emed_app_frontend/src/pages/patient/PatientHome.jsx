import { Outlet } from 'react-router-dom';
import PatientNavbar from './PatientNavbar';
import Footer from './Footer';
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
  {/* <footer className='footer bg-dark text-white py-3 '>copyright CDAC@2025 EMED-Project</footer>
   */}
   <Footer/>
</>
  )
}
export default PatientHome;