import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hero from './hero';
import NavItems from './nav-items';

export default class LandingNavHero extends Component {
	constructor(props){
        super(props)
    }


  render() {

    return(
    	<div class="hero is-theme-primary is-slant">

            <nav class="navbar navbar-wrapper navbar-fade navbar-light is-transparent">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <img class="light-logo" src="static/assets/images/unclebanks-alt.png" width="110"  alt="" />
                        </a>

                        <button class="button primary-btn navbar-burger" data-target="navMenu" onClick={this.props.handleCloseClick}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                    </div>
            

                    <NavItems page={'landing'} />

                </div>
            </nav>

            <Hero />

        </div>
    )
  } 

}
