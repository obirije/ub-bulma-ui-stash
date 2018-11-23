import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {          
        }
    }
    
  render() {
    return (
      <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={{background: 'url(../../assets/images/big/auth-bg.jpg) no-repeat center center'}}>
          <div className="auth-box">
            <div id="loginform">
              <div className="logo">
                <span className="db"></span>
                <h5 className="font-medium m-b-20">Sign In to Account</h5>
              </div>
              <div className="row">
                <form className="col s12" action="index.html">
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" required />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="password" type="password" className="validate" required />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row m-t-5">
                    <div className="col s7">
                      <label>
                        <input type="checkbox" />
                        <span>Remember Me?</span>
                      </label>
                    </div>
                    <div className="col s5 right-align"><Link to="/recovery" >Forgot Pwd?</Link></div>
                  </div>
                  <div className="row m-t-40">
                    <div className="col s12">
                      <button className="btn-large w100 blue accent-4" type="submit">Login</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="center-align m-t-20 db">
                <a href="#" className="btn indigo darken-1 tooltipped m-r-5" data-position="top" data-tooltip="Login with Facebook"><i className="fab fa-facebook-f" /></a> <a href="#" className="btn orange darken-4 tooltipped" data-position="top" data-tooltip="Login with Facebook"><i className="fab fa-google-plus-g" /></a>
              </div>
              <div className="center-align m-t-20 db">
                Don't have an account? <Link to="register">Sign Up!</Link>
              </div>
            </div> 

          </div>
        </div>

    );
  }
}
