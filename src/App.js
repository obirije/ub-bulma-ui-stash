import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Login from './components/login-component/login';
import Recovery from './components/login-component/recovery';
import Register from './components/login-component/register';

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
