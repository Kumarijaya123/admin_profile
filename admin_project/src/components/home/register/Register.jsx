import './register.css'
import logo from '../../../assets/logo.jpg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Register() {
    const history=useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login(e){
        e.preventDefault()

        try{
             await axios.post("http://localhost:8000/register", {
                username, email, password
             }).then(res=>{
                if(res.data=="exist"){
                   alert("User already exists")
                }
                else if(res.data=="not exist"){
                    history("/home", {state:{id:username}})
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
                <div className='sign'>Sign Up</div>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username*' className="loginInput" id='' />
                <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email*' className="loginInput" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password*' className="loginInput" />
                <button type='login' onClick={login} className='loginButton'>Sign Up</button>
                <Link className='loginRegister' to='/'>Login into account</Link>
              
              </div>
            </div>
        </div>
    </div>
  )
}

export default Register