import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Login from './components/login-component/login';
import Recovery from './components/login-component/recovery';
import Register from './components/login-component/register';
import Dashboard from './components/dashboard-component/dashboard';
import Activity from './components/activity-component/activity';
import Profile from './components/profile-component/profile';
import Buy from './components/buy-component/buy';


import { HashRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    	<Router>
			<Switch>

		      	<HomePage path="/" exact />

		      	<Route path="/login" exact render={ props => (
		      		<Login {...props} />
		      	)} />

		      	<Route path="/dashboard" exact render={ props => (
		      		<Dashboard {...props} />
		      	)} />

		      	<Route path="/activities" exact render={ props => (
		      		<Activity {...props} />
		      	)} />

		      	<Route path="/profile" exact render={ props => (
		      		<Profile {...props} />
		      	)} />

		      	<Route path="/buy" exact render={ props => (
		      		<Buy {...props} />
		      	)} />

		      	<Route path="/recovery" exact component={Recovery} />

		      	<Route path="/register" exact component={Register} />

		    </Switch>
		</Router>
    );
  }
}

const HomePage = (props) => {
	return(
		<div id="main-wrapper">
          <Header />
      </div>
	)
}
