import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OtherPagesNav from './other-pages-nav';


export default class DashboardNav extends Component {
	constructor(props){
		super(props)

		this.state = {
            isSideNavActive: false
        }
	}

	openSideNav = () => {
        this.setState({
            isSideNavActive: !this.state.isSideNavActive
        })
    }


	render(){

		return(
			<div>

				<OtherPagesNav type={'dashboard'} > 
					<a id="navigation-trigger" class="navbar-item hamburger-btn" onClick={this.openSideNav}>
	                    <span class="menu-toggle">  
	                        <span class={`icon-box-toggle ${this.state.isSideNavActive && 'active'}`}>  
	                            <span class="rotate">
	                                <i class="icon-line-top"></i>
	                                <i class="icon-line-center"></i>
	                                <i class="icon-line-bottom"></i> 
	                            </span>
	                        </span>
	                    </span> Menu
	                </a>
				</OtherPagesNav>

				<div class={`side-navigation-menu ${this.state.isSideNavActive && 'is-active'}`}>
		            <div class="category-menu-wrapper">
		                <ul class="categories">
		                    <li class="square-logo"><img src="static/assets/images/unclebanks-alt.png" alt="" /></li>
		                </ul>
		        
		                <ul class="author">
		                    <li>
		                        <a href="https://cssninja.io" target="_blank">
		                            <img class="main-menu-author" src="assets/images/logos/cssninja.svg" alt="" />
		                        </a>
		                    </li>
		                </ul>
		            </div>

		            <div class="navigation-menu-wrapper animated preFadeInRight fadeInRight">
		                
		                <div class="navigation-menu-header">
		                    <span>Main Menu</span>
		                    <a class="ml-auto hamburger-btn navigation-close" onClick={this.openSideNav} style={{ opacity: '1'}}>
		                        <span class="menu-toggle">  
		                            <span class="icon-box-toggle active">  
		                                <span class="rotate">
		                                    <i class="icon-line-top"></i>
		                                    <i class="icon-line-center"></i>
		                                    <i class="icon-line-bottom"></i> 
		                                </span>
		                            </span>
		                        </span>
		                    </a>
		                </div>

		                <ul class="navigation-menu">
		                	<li><Link class="parent-link" to="dashboard"><span class="material-icons">weekend</span>Home</Link></li>
		                	<li><Link class="parent-link" to="buy"><span class="material-icons">monetization_on</span>Buy Coins</Link></li>
		                	<li><Link class="parent-link" to="activities"><span class="material-icons">equalizer</span>Activities</Link></li>
		                	<li><Link class="parent-link" to="profile"><span class="material-icons">account_circle</span>Account</Link></li>
		                	<li><a class="parent-link" href="#"><span class="material-icons">keyboard_backspace</span>Sign out</a></li>
		                </ul>
                	</div>
        		</div>
        	</div>
		)
	}
}

// <li><a class="parent-link" href="#"><span class="material-icons">settings</span>Settings</a></li>