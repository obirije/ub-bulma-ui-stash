import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../logo.svg';
import LandingNavHero from './landing-nav-hero';
import OtherPagesNav from './other-pages-nav';

export default class Header extends Component {

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
        
        { this.props.page === 'landing' ? <LandingNavHero handleCloseClick={this.handleCloseClick} /> :  <OtherPagesNav handleCloseClick={this.handleCloseClick} /> }

        <div class="side-navigation-menu">
            <div class="category-menu-wrapper">
                <ul class="categories">
                    <li class="square-logo"><img src="assets/images/logos/square-white.svg" alt="" /></li>
                    <li class="category-link is-active" data-navigation-menu="demo-pages"><i class="sl sl-icon-layers"></i></li>
                    <li class="category-link" data-navigation-menu="components"><i class="sl sl-icon-grid"></i></li>
                    <li class="category-link" data-navigation-menu="extras"><i class="sl sl-icon-present"></i></li>
                </ul>
        
                <ul class="author">
                    <li>
                        <a href="https://cssninja.io" target="_blank">
                            <img class="main-menu-author" src="assets/images/logos/cssninja.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        </div>
    );
  }
}

// <a id="navigation-trigger" class="navbar-item hamburger-btn" href="javascript:void(0);">
                        //     <span class="menu-toggle">  
                        //         <span class="icon-box-toggle">  
                        //             <span class="rotate">
                        //                 <i class="icon-line-top"></i>
                        //                 <i class="icon-line-center"></i>
                        //                 <i class="icon-line-bottom"></i> 
                        //             </span>
                        //         </span>
                        //     </span>
                        // </a>