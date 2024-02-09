import './login.css'
import logo from '../../../assets/logo.jpg'
import axios from 'axios'
import { useNavigate , Link} from 'react-router-dom'
import { useState } from 'react'


function Login() {
    const history=useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login(e){
        e.preventDefault()

        try{
             await axios.post("http://localhost:8000/", {
                email, password
             })
             .then(res=>{
                if(res.data=="exist"){
                   history("/home", {state:{id:email}})
                }
                else if(res.data=="not exist"){
                    alert("User not exist")
                 }
             })
             .catch(e=>{
                alert("wrong details")
                console.log(e)
             })
        } 
        catch(e){
             console.log(e)
        }
    }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
              <img src={logo} alt="" className="logo" />
                <h3 className="loginLogo">K_code</h3>
                <span className="loginDesc">
                    Connect with friends and the world round you on K_code
                </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
              <div className='log-in'>Login</div>
                <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className="loginInput" id='' />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' className="loginInput" id=''/>
                <button type='login' onClick={login} className='loginButton'>Log In</button>
                <span className="loginForget">or</span>
                <Link className= "loginRegister" to='/register'>Create a New account</Link>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login