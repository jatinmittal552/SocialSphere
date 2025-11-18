import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="name">SocialSphere</h3>
                <span className="desc">Connect with anyone across the globe</span>
            </div>
            <span><div className="divider"></div></span>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" className="loginInput" placeholder='Enter your mail' />
                    <input type="Password" className="loginInput" placeholder='Enter your password' />
                    <button className="loginSumbit">Login</button>
                    <span className="loginForgot">Forget your password?</span>
                    <button className='loginRegister'>SignUp</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login