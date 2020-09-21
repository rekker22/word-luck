import React from 'react';
import './Register.css';

export class Register extends React.Component{
    render() {
        return (
            <div className='register'>
                <p className='head'>Register</p>
                <form className='register-input'>
                    <input className='input' type='text' name='name' placeholder='Enter your name'/>
                    <input className='input' type='email' name='email' placeholder='Enter your Email'/>
                    <input className='input' type='text' name='number' placeholder='Enter your Mobile Number'/>
                    <input className='input' type='password' name='password' placeholder='Enter your Password'/>
                    <input className='input' type='password' name='password2' placeholder='Confirm your password'/>
                    <div className='btns'>
                        <button className='btn'>Register</button>
                        <button className='btn'>Login</button>
                    </div>
                </form> 
            </div>
        )
    }
}

export default Register;