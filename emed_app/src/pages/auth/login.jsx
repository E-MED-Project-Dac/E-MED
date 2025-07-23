import React from "react";
import { useContext , useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){
    //create state to get input from user
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    //get navigate function reference
    const navigate = useNavigate()

    //button click event handler
    const onLogin = async () =>{
       //write logic
    }

return(
<>
 <div class="card text-center">
  <div class="card-header">
    Welcome to EMED
  </div>
  <div class="card-body">
     <h2 className="page-header">Login</h2>
     <div className="container">
        <div className="form">
            <div className="mb-3">
                <label htmlFor="">Email</label>
                <input
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="username@test.com"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Password</label>
                <input
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="########"
                />
            </div>
             <div style={{display:"flex" , justifyContent:"space-between"}}>     
                <div className="mb-3">
                    Don't have an account yet?<Link to='/register'>Register here</Link>
                </div>
                <button
                    onClick={onLogin}
                    className="btn btn-success"
                >
                    Login
                </button>
            </div>
        </div>
    </div>
  </div>
   <footer className="footer"> copyright CDAC@2025 EMED-Project <a href="/aboutUs" style={{marginRight:30,marginLeft:20}}>About-Us</a> <a href="/contectUs">Contact-Us</a></footer>
 </div>
</> 
)
}
export default Login