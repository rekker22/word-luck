import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import './Register.css';

export class Register extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="heading">
                    <label>
                        Registration
                    </label>
                </div>
                <form class="register" onsubmit="">
                    <input class="content" type="text" placeholder='Name'>

                    </input><br />
                    <input class="content" type="email" placeholder='Email'>

                    </input><br />
                    <input class="content" type="text" placeholder='Mobile'>

                    </input><br />
                    <input class="content" type="password" placeholder='Password'>

                    </input><br />
                    <input class="content" type="password" placeholder='Confirm Password'>

                    </input><br />
                    <input class="content" type="text" placeholder='Referral Code'>

                    </input><br />
                    <button value="Create" class="content">
                        Create
                    </button>
                </form>
                <p>
                    By signing up you agree with our Terms and conditions
                </p>
                <p>
                    Already a member? Login
                </p>
            </div>
        )
    }
}

export default Register;