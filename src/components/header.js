import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../logo.svg';
import LandingNavHero from './landing-nav-hero';
import OtherPagesNav from './other-pages-nav';

export default class Header extends Component {
    constructor(props){
        super(props);

    }

    handleCloseClick = (e) => {
        console.log("Clicked navbar-burger");
         // Get all "navbar-burger" elements
          var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

          // Check if there are any navbar burgers
          if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
          }
    }


  render() {
    return (
        <div>
        
        { this.props.page === 'landing' ? <LandingNavHero handleCloseClick={this.handleCloseClick}  /> 
            :  <OtherPagesNav handleCloseClick={this.handleCloseClick} /> }

        </div>
    );
  }
}
