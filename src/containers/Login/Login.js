import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className='login'>
                <p className='head'>Log in</p>
                <div className='login-input'>
                    <input className='input' type='text' name='phone' placeholder='Enter your no.'/>
                    <input className='input' type='password' name='password' placeholder='Enter your password'/>
                    <button className='btn'>Login</button>
                </div>
                <div className='login-register'>
                    <button className='btn'>New Registration</button>
                    <button className='btn'>Forgot Password</button>
                </div>
            </div>
        )
    }
}

export default Login;