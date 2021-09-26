import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PortfolioManager from './pages/portfolio-manager';
import NoMatch from './pages/noMatch';
import Icons from '../helpers/icons';
import PortfolioDetail from './portfolio/portfolio-detail';
import Letterboxd from './pages/letterboxd';
import Auth from './pages/auth';
import NavigationContainer from './navigation/navigation-container';

export const history = createBrowserHistory({
	basename: process.env.PUBLIC_URL,
});

export default class App extends Component {
	constructor(props) {
		super(props);

		Icons();

		this.state = {
			loggedInStatus: 'NOT_LOGGED_IN',
		};
		this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
		this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
		this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
	}

	handleSuccessfulLogin() {
		this.setState({
			loggedInStatus: 'LOGGED_IN',
		});
	}

	handleUnsuccessfulLogin() {
		this.setState({
			loggedInStatus: 'NOT_LOGGED_IN',
		});
	}

	handleSuccessfulLogout() {
		this.setState({
			loggedInStatus: 'NOT_LOGGED_IN',
		});
	}

	checkLoginStatus() {
		return axios
			.get('https://api.devcamp.space/logged_in', {
				withCredentials: true,
			})
			.then((response) => {
				const loggedIn = response.data.logged_in;
				const loggedInStatus = this.state.loggedInStatus;

				// If loggedIn and status is LOGGED_IN => return data
				// If loggedIn and status is NOT_LOGGED_IN => update state
				// If not loggedIn and status is LOGGED_IN => update state (NOT_LOGGED_IN)

				if (loggedIn && loggedInStatus === 'LOGGED_IN') {
					return loggedIn;
				} else if (loggedIn && loggedInStatus === 'NOT_LOGGED_IN') {
					this.setState({
						loggedInStatus: 'LOGGED_IN',
					});
				} else if (!loggedIn && loggedInStatus === 'LOGGED_IN') {
					this.setState({
						loggedInStatus: 'NOT_LOGGED_IN',
					});
				}
			})
			.catch((error) => {
				console.error('Error', error);
			});
	}

	componentDidMount() {
		this.checkLoginStatus();
	}

	authorizedPages() {
		return [
			<Route
				key="portfolio-manager"
				exact
				path="/portfolio-manager"
				component={PortfolioManager}
			/>,
		];
	}

	render() {
		return (
			<div className="container">
				<Router basename="/">
					<div>
						<NavigationContainer
							loggedInStatus={this.state.loggedInStatus}
							handleSuccessfulLogout={this.handleSuccessfulLogout}
						/>

						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/auth"
								render={(props) => (
									<Auth
										{...props}
										handleSuccessfulLogin={this.handleSuccessfulLogin}
										handleUnSuccessfulLogin={this.handleUnsuccessfulLogin}
									/>
								)}
							/>
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/reviews" component={Letterboxd} />
							{this.state.loggedInStatus === 'LOGGED_IN'
								? this.authorizedPages()
								: null}
							<Route exact path="/portfolio/:slug" component={PortfolioDetail} />
							<Route component={NoMatch} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
