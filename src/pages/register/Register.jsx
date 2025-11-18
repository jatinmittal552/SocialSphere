import React from 'react'
import './register.css'
const Register = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="name">SocialSphere</h3>
                <span className="desc">Connect with anyone across the globe</span>
            </div>
            <div className="divider"></div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" className='loginInput' placeholder='Enter your name' />
                    <input type="Email" className="loginInput" placeholder='Enter your mail' />
                    <input type="Password" className="loginInput" placeholder='Enter your password' />
                    <button className="loginSumbit">SignUp</button>
                    <div className='Or'>
                        <hr className='line'/>
                        <span className="loginForgot">OR</span>
                        <hr className='line'/>
                    </div>
                    <button className='loginRegister'>LogIn</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register