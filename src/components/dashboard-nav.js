import React, { Component } from 'react';


export default class DashboardNav extends Component {

	render(){

		return(
			<div>
				<header class="topbar">
				    <nav style={{ background: '#2962FF'}} >
				        <div class="nav-wrapper">
				            <a href="javascript:void(0)" class="brand-logo">
				                <span class="text">
				                    <img class="light-logo" src="static/assets/images/unclebanks-alt.png" width="100" 
				                    	style={{ paddingTop: '25px', paddingLeft: '10px'}} />
				                </span>
				            </a>
				            <ul class="left">
				                <li class="hide-on-med-and-down">
				                    <a href="" class="nav-toggle">
				                        <span class="bars bar1"></span>
				                        <span class="bars bar2"></span>
				                        <span class="bars bar3"></span>
				                    </a>
				                </li>
				                <li class="hide-on-large-only">
				                    <a href="javascript: void(0);" class="sidebar-toggle">
				                        <span class="bars bar1"></span>
				                        <span class="bars bar2"></span>
				                        <span class="bars bar3"></span>
				                    </a>
				                </li>
				                <li class="search-box">
				                    <a><i class="material-icons">search</i></a>
				                    <form class="app-search">
				                        <input type="text" class="form-control" placeholder="Search &amp; enter" /> <a class="srh-btn"><i class="fas fa-times"></i></a>
				                    </form>
				                </li>
				            </ul>
				            <ul class="right">
				    
				                <li><a class="dropdown-trigger" href="javascript: void(0);" data-target="user_dropdown"><img src="static/assets/images/user-avater.jpg" alt="user" class="circle profile-pic" /></a>
				                    <ul id="user_dropdown" class="mailbox dropdown-content dropdown-user">
				                        <li>
				                            <div class="dw-user-box">
				                                <div class="u-img"><img src="static/assets/images/user-avater.jpg" alt="user" /></div>
				                                <div class="u-text">
				                                    <h4>Steve Harvey</h4>
				                                    <p>steve@gmail.com</p>
				                                    <a class="waves-effect waves-light btn-small red white-text">View Profile</a>
				                                </div>
				                            </div>
				                        </li>
				                        <li role="separator" class="divider"></li>
				                        <li><a href="#"><i class="material-icons">account_circle</i> My Profile</a></li>
				                        <li><a href="#"><i class="material-icons">account_balance_wallet</i> My Balance</a></li>
				                        <li><a href="#"><i class="material-icons">inbox</i> Inbox</a></li>
				                        <li role="separator" class="divider"></li>
				                        <li><a href="#"><i class="material-icons">settings</i> Account Setting</a></li>
				                        <li role="separator" class="divider"></li>
				                        <li><a href="#"><i class="material-icons">power_settings_new</i> Logout</a></li>
				                    </ul>
				                </li>
				            </ul>
				        </div>
				    </nav>
				</header>


				<aside class="left-sidebar content-space">
			        <ul id="slide-out" class="sidenav" data-sidebarbg="skin6">
			            <li class="side-wrap">
			                <ul class="collapsible">
			                    <li class="small-cap"><span class="hide-menu">PERSONAL</span></li>
			                    <li>
			                        <a href="/" class="collapsible-header"><i class="material-icons">dashboard</i><span class="hide-menu"> Dashboard</span></a>
			                    </li>

			                    <li class="small-cap"><span class="hide-menu">Campaigns</span></li>
			                    <li>
			                        <a href="javascript: void(0);" class="collapsible-header has-arrow"><i class="material-icons">widgets</i><span class="hide-menu"> Campaigns </span></a>
			                        <div class="collapsible-body">
			                            <ul>
			                                <li><router-link to="create-campaign"><i class="ti-pencil-alt"></i><span class="hide-menu">Create</span></router-link></li>
			                                <li><router-link to="campaigns"><i class="ti-layers"></i><span class="hide-menu">View All</span></router-link></li>
			                            </ul>
			                        </div>
			                    </li>
			                    <li class="small-cap"><span class="hide-menu">Schedules</span></li>
			                    <li class="multiple">
			                        <router-link to="schedules" class="collapsible-header"><i class="ti-alarm-clock"></i><span class="hide-menu">Schedules</span></router-link>
			                    </li>
			                    <li>
			                        <a href="javascript: void(0);" class="collapsible-header has-arrow two-column"><i class="material-icons">move_to_inbox</i><span class="hide-menu"> Login </span></a>
			                        <div class="collapsible-body">
			                            <ul>
			                                <li><a href="/#/register"><i class="material-icons">receipt</i><span class="hide-menu">Register</span></a></li>
			                                <li><a href="/#/login"><i class="material-icons">receipt</i><span class="hide-menu">Login</span></a></li>
			                            </ul>
			                        </div>
			                    </li>
			                </ul>
			            </li>
			        </ul>
			    </aside>

		</div>

		)
	}
}