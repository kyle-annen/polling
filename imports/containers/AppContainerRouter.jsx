import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
//import account wrapper
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

//import components
import App from '../ui/App.jsx';
import About from '../ui/About.jsx';


export default class AppContainerRouter extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav className="blue">
						<div className="nav-wrapper">
							<Link className="brand-logo center" to="/">Polling</Link>
							<ul id="mobile-nav" className="right hide-on-med-and-down">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/about">About</Link></li>
							</ul>
							<AccountsUIWrapper className="float-xs-right"/>
						</div>
					</nav>

					<Route exact path="/" component={App} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		)
	}
}


