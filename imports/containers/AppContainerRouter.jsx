import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import App from '../ui/App.jsx';
import About from '../ui/About.jsx';

export default class AppContainerRouter extends React.Component {
	render() {
		return (
			<Router>
				<div>

					<nav>
						<div className="nav-wrapper">
							<Link className="brand-logo center" to="/">Polling</Link>
							<ul id="nav-mobile" className="left hid-on-med-and-down">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/about">About</Link></li>
							</ul>
						</div>
					</nav>

					<Route exact path="/" component={App} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		)
	}
}