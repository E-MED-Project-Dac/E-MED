import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
function AdminHome(){
  return(
<>
  <AdminNavbar/>
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
export default AdminHome;