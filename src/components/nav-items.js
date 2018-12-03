import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavItems extends Component {
    constructor(props){
        super(props)

        this.state = {
            profileDrop: false
        }
    }

    profileDropClick = () => {
        this.setState({
            profileDrop: !this.state.profileDrop
        })
    }


  render() {

    return(
        <div class="navbar-menu" id="navMenu">

            { this.props.type !== 'dashboard' ? 

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

            :

                <div class="navbar-start">

                    <div class="navbar-item is-slide">
                        <input class="input rounded is-medium" type="text" placeholder="Search" style={{ marginLeft: '20%', width: '500px'}} />
                    </div>

                </div>

            }


            { this.props.type !== 'dashboard' ?

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
            
            :

                <div class="navbar-end">
                    <div class="navbar-item has-dropdown">
                            <a  class="navbar-link" onClick={this.profileDropClick}>
                                <img src="static/assets/images/user.png" alt="" />
                            </a>

                            <div class="navbar-dropdown" style={{ display: `${this.state.profileDrop ? 'block' : 'none'}`}}>
                                    <a class="navbar-item is-menu" href="/agency/index.html">
                                        <i class="sl sl-icon-user mt-10"></i>
                                        <span>Account</span>
                                    </a>

                                    <a class="navbar-item is-menu" href="/startup/index.html">
                                        <i class="sl sl-icon-bell mt-10"></i>
                                        <span>Notifications</span>
                                    </a>

                                    <a class="navbar-item is-menu" href="/startup/index.html">
                                        <i class="sl sl-icon-settings mt-10"></i>
                                        <span>Settings</span>
                                    </a>

                                    <hr class="navbar-divider" />

                                    <a class="navbar-item is-menu" href="/dashboard/index.html">
                                        <i class="sl sl-icon-logout"></i>
                                        <span>Logout</span>
                                    </a>
                            </div>
                    </div>
                </div>
            }
        </div>
    )
  } 

}
