import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default class Recovery extends Component {
    constructor(props){
        super(props)
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
                            <div class="animated preFadeInLeft fadeInLeft">
                                <div class="flex-card clean-login-card">
                                    <h2>Reset Password</h2>
                                    <form>
                                        <div class="control-material is-primary">      
                                            <input class="material-input" type="text" required />
                                            <span class="material-highlight"></span>
                                            <span class="bar"></span>
                                            <label>Email *</label>
                                        </div>

                                        <div class="mt-20">
                                            <button class="button button-cta btn-align primary-btn is-fullwidth raised no-lh">Reset Password</button>
                                        </div>
                                    </form>
                                </div>

                                <p class="has-text-centered mt-40">
                                    <Link to="login" id="show-login" class="no-account primary-text">Back to login</Link>
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
