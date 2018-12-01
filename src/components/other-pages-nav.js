import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavItems from './nav-items';

export default class OtherPagesNav extends Component {
	constructor(props){
        super(props)
    }


  render() {

    return(
        <nav class="navbar navbar-wrapper navbar-default navbar-fade is-semisolid">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src="static/assets/images/unclebanks-alt.png" alt="" />
                        </a>
            
                        <button class="button primary-btn navbar-burger" data-target="navMenu" onClick={this.props.handleCloseClick}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                    </div>
            
                    <NavItems />
                </div>
            </nav>
    )
  } 

}
