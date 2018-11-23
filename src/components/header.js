import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../logo.svg';
import Hero from './hero';

export default class Header extends Component {
  render() {
    return (
        <header class="top-bar">
            <div class="header m-b-20">
                <nav class="sml-nav p-r-0">
                    <div class="nav-wrapper info-gradient">
                        <a href="#!" class="brand-logo sml-logo ">
                            <img src="static/assets/images/logo-light-icon.png" alt="logo" class="ml-auto" />
                        </a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger sml-icon"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down m-r-40">
                            <li><a href="#demos">About</a></li>
                            <li>
                                <NavLink to="/login" target="_blank">Login</NavLink>
                            </li>
                        </ul>
                         <ul class="sidenav sml-font" id="mobile-demo">
                            <li><a href="#demos">About</a></li>
                            <li>
                                <NavLink to="login" target="_blank">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Hero />
            
        </header>
    );
  }
}
