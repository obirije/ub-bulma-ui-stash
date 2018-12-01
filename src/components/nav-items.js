import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavItems extends Component {
    constructor(props){
        super(props)
    }


  render() {

    return(
        <div class="navbar-menu" id="navMenu">

            <div class="navbar-start">

                <a class="navbar-item is-slide" href="landing-v1-features.html">
                    About
                </a>

                <a class="navbar-item is-slide" href="landing-v1-pricing.html">
                    Terms
                </a>

                <Link to="login" class="navbar-item is-slide" href="landing-v1-login.html">
                    Login
                </Link>
            </div>


            <div class="navbar-end">

                { this.props.page === 'landing' ? <div class="navbar-item">
                    <Link to="register" id="#signup-btn" href="landing-v1-signup.html" class="button button-signup btn-outlined is-bold btn-align light-btn raised">
                        Sign up
                    </Link>
                </div> 

                :

                <div class="navbar-item">
                    <Link to="register" id="#signup-btn" href="landing-v1-signup.html" class="button button-cta btn-outlined is-bold btn-align primary-btn raised">
                        Sign up
                    </Link>
                </div>

                }
            </div>
        </div>
    )
  } 

}
