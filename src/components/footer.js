import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavItems extends Component {
    constructor(props){
        super(props)
    }


  render() {

    return(
        <footer class="footer footer-light-left">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-6">
                        <div class="mb-20">
                            <img class="small-footer-logo" src="assets/images/logos/bulkit-logo-g.png" alt="" />
                        </div>
                        <div>
                            <span class="moto">Designed and coded with <i class="fa fa-heart color-red"></i> by UncleBanks Team</span>
                            <nav class="level is-mobile mt-20">
                                <div class="level-left level-social">
                                    <a href="#" class="level-item">
                                        <span class="icon"><i class="fa fa-facebook"></i></span>
                                    </a>
                                    <a href="#" class="level-item">
                                        <span class="icon"><i class="fa fa-twitter"></i></span>
                                    </a>
                                    <a href="#" class="level-item">
                                        <span class="icon"><i class="fa fa-linkedin"></i></span>
                                    </a>
                                    <a href="#" class="level-item">
                                        <span class="icon"><i class="fa fa-github"></i></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-nav-right">
                            <Link class="footer-nav-link" to="/">Home</Link>
                            <a class="footer-nav-link" href="#">About</a>
                            <a class="footer-nav-link" href="#">Terms</a>
                            <Link class="footer-nav-link" to="login">Sign in</Link>
                            <Link class="footer-nav-link" to="register">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  } 

}
