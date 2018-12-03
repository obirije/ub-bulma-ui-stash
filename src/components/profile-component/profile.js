import React, { Component } from 'react';
import DashboardNav from '../dashboard-nav';

export default class Profile extends Component {
    constructor(props) {
        super(props)


    }

    render() {

        return (
            <div>
				<DashboardNav />

				<div class="dashboard-wrapper">

					<div class="container is-fluid">
        
                        <div id="profile-cover" class="columns">
                            <div class="cover-overlay"></div>
                            <div class="column is-10 is-offset-1 heading-wrapper">
                                <div class="profile-heading">
                                    <div class="columns">
                                        <div class="column is-offset-1 is-2 has-text-centered">
                                            <div class="image is-128x128 avatar">
                                                <div class="avatar-overlay">
                                                    <i class="fa fa-camera"></i>
                                                </div>
                                                <img src="https://via.placeholder.com/250x250" alt="" />
                                            </div>
                                        </div>
                                        <div class="column is-4 name">
                                            <p>
                                                <span class="title dark-text is-bold">Helen Miller</span>
                                            </p>
                                            <p class="tagline dark-text">helen@gmail.com</p>
                                        </div>
                                        <div class="column is-2 followers has-text-centered is-hidden-mobile">
                                            
                                        </div>
                                        <div class="column is-2 following has-text-centered is-hidden-mobile">
                                            
                                        </div>
                                        <div class="column is-2 likes has-text-centered is-hidden-mobile">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="container">
                            <div class="columns">
                                <div class="column is-10 is-offset-1">
                                    <div class="profile-sections-wrapper">

                                        <div id="profile-details">
                                            <div class="columns">
                                                

                                                <div id="profile-view" class="column is-10 is-offset-1">
                                                    <div class="flex-card is-top light-bordered raised animated preFadeInUp fadeInUp">
                                                        <div class="edit-button edit-trigger has-text-left mt-10 ml-20">
                                                            <button class="button btn-dash secondary-btn raised ripple no-lh rounded">Edit profile</button>
                                                        </div>

                                                        <div class="card-body">
                                                            <div class="columns">
                                                                <div class="column is-6">
                                                                    <div class="info-section">

                                                                        <h1 class="info-heading">Personal info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Full name :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        Helen Miller
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Age :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        27 years    
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Country :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        United States
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="info-section">
                                                                        <h1 class="info-heading">Contact info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Email :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        hmiller@acme.io
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Mobile :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        +1 556 548 55
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Office :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        +1 589 654 32
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="column is-6">
                                                                    <div class="info-section">
                                                                        <h1 class="info-heading">Company info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Company :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        Acme Inc.
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Department :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        Sales & Marketing
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Position :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        Sales Manager
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                   
                                            </div>
                                        </div>
									</div>
                                </div>
                            </div>
                        </div>
                    </div>

				</div>
			</div>
        )
    }
}