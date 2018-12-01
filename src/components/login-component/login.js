import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {          
        }
    }

  render() {

    return(
        <div>

          <div class="hero is-light-grey is-fullheight">

              <Header />

              <div id="main-hero" class="hero-body">
                  <div class="container has-text-centered">
                      <div class="columns is-vcentered">
                          <div class="column is-6 is-offset-3">
                              
                              <div id="login-card" class="animated preFadeInLeft fadeInLeft">
                                  <div class="flex-card clean-login-card">
                                      <h2>Login</h2>
                                      <form>
                                          <div class="control-material is-primary">      
                                              <input class="material-input" type="text" required />
                                              <span class="material-highlight"></span>
                                              <span class="bar"></span>
                                              <label>Username</label>
                                          </div>
                                          <div class="control-material is-primary">      
                                              <input class="material-input" type="text" required />
                                              <span class="material-highlight"></span>
                                              <span class="bar"></span>
                                              <label>Password</label>
                                          </div>
          
                                          <div class="field mt-20">
                                              <div class="control">
                                                  <label class="checkbox-wrap is-medium">
                                                      <input id="check2" type="checkbox" class="d-checkbox" />
                                                      <span></span>
                                                      Remember me
                                                  </label>
                                              </div>
                                          </div>
          
                                          <div class="mt-20">
                                              <button class="button button-cta btn-align primary-btn is-fullwidth raised no-lh">Login</button>
                                          </div>
                                      </form>
                                  </div>
          
                                  <p class="has-text-centered mt-30">
                                      <Link to="recovery" id="show-recover" class="no-account  primary-text">Lost your password?</Link>
                                  </p>
                              </div>
   
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <Footer />

        </div>
    )
  } 

}
