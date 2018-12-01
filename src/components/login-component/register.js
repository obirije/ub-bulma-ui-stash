import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../header';

import Footer from '../footer';

export default class Register extends Component {
    constructor(props){
        super(props)
    }

  render() {

    return(
        <div>
            <div class="hero is-light-grey is-fullheight">

                <Header />

                <div id="main-hero" class="hero-body">
                    <div class="container">
                        <div class="columns is-vcentered">
                            <div class="column is-5 is-offset-1 is-hidden-mobile">
                                <div class="flex-card clean-signup-info padding-20">
                                    <h2 class="has-text-centered clean-text">Get started</h2>
                                    <div class="feature">
                                        <img src="static/assets/images/illustrations/icons/landing-v1/business-ready.svg" alt="" />
                                        <div class="feature-text">Register with your basic details, so we can know you</div>
                                    </div>
                                    <div class="feature">
                                        <img src="static/assets/images/illustrations/icons/landing-v1/credit-card.svg" alt="" />
                                        <div class="feature-text">Select cryptocurrency you want to purchase and enter you card for payment</div>
                                    </div>
                                    <div class="feature">
                                        <img src="static/assets/images/illustrations/icons/landing-v1/components.svg" alt="" />
                                        <div class="feature-text">Get your coins instantly within minutes on your wallet address</div>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div id="signup-card" class="animated preFadeInLeft fadeInLeft">
                                    <div class="flex-card clean-signup-card">
                                        <h2 class="has-text-centered">Sign up</h2>
                                        <form>
                                            <div class="control-material is-primary">      
                                                <input class="material-input" type="text" required />
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label>Email *</label>
                                            </div>
                                            <div class="control-material is-primary">      
                                                <input class="material-input" type="text" required />
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label>Full name *</label>
                                            </div>
                                            <div class="control-material is-primary">      
                                                <input class="material-input" type="text" required />
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label>Password *</label>
                                            </div>
            
                                            <div class="mt-20">
                                                <button class="button button-cta btn-align primary-btn is-fullwidth raised no-lh">Get started now</button>
                                            </div>
                                        </form>
                                    </div>
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
