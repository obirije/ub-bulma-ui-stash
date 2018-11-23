import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    constructor(props){
        super(props)
    }



  render() {

    return(
      <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={{background: 'url(../../assets/images/big/auth-bg.jpg) no-repeat center center'}}>
        <div className="auth-box">
          <div id="loginform">
            <div class="logo">
                <h5 class="font-medium m-b-20">Register an Account</h5>
            </div>
            <div class="row">
                <form class="col s12" action="index.html">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text" class="validate" required />
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate" required />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" required />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="cpassword" type="password" class="validate" required />
                            <label for="cpassword">Password</label>
                        </div>
                    </div>
                    <div class="row m-t-5">
                        <div class="col s7">
                            <label>
                                <input type="checkbox" />
                                <span>Agree to all Terms</span>
                            </label>
                        </div>
                    </div>
                    <div class="row m-t-40">
                        <div class="col s12">
                            <button class="btn-large w100 red" type="submit">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="center-align m-t-20 db">
                Already have an account? <Link to="login" >Login</Link>
            </div>
          </div>
        </div>
      </div>
    )
  } 

}
