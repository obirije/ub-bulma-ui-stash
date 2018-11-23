import React, { Component } from 'react';

export default class Recovery extends Component {
    constructor(props){
        super(props)
    }



  render() {

    return(
      <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={{background: 'url(../../assets/images/big/auth-bg.jpg) no-repeat center center'}}>
        <div className="auth-box">
          <div className="logo">
            <h5 className="font-medium m-b-20">Recover Password</h5>
            <span>Enter your Email and instructions will be sent to you!</span>
          </div>
          <div className="row">
            <form className="col s12" action="index.html">
              <div className="row">
                <div className="input-field col s12">
                  <input id="email1" type="email" className="validate" required />
                  <label htmlFor="email1">Email</label>
                </div>
              </div>
              <div className="row m-t-20">
                <div className="col s12">
                  <button className="btn-large w100 red" type="submit" name="action">Reset</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  } 

}
