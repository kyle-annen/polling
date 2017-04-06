import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, NavItem, Button} from 'react-materialize';
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
import BreadCrumbs from '../ui/BreadCrumbs.jsx';


export default class AppContainerRouter extends React.Component {
	constructor(props) {
		super(props);
		this.activateDropdown = this.activateDropdown.bind(this);
	}

	//function to enable the function of the dropdown in nav
	activateDropdown() {
		const dropdown = ReactDOM.findDOMNode(this.refs.dropdown)
		$(dropdown).ready(function(){
			$(".dropdown-button").dropdown();
		})
	}
	

	render() {
		//makes dropdown in nav work
		this.activateDropdown();
		return (
			<Router>
				<div>
					
					<nav className="blue">
						<div className="nav-wrapper">
							<div className="col s12">
								<Link className="brand-logo center" to="/">Polling</Link>
								<ul id="mobile-nav" className="right hide-on-med-and-down">
									<li><Link to="/">Home</Link></li>
									<li><Link to="/about">About</Link></li>
									<Dropdown trigger={<li id="poll-button"><Link to="#">Polls</Link></li>}>
										<NavItem>Create Poll</NavItem>
										<NavItem>My Polls</NavItem>
										<NavItem>Browse Polls</NavItem>
									</Dropdown>
								</ul>
								<AccountsUIWrapper className="float-xs-right"/>
							</div>
						</div>
					</nav>
					<BreadCrumbs />
					<Route exact path="/" component={App} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		)
	}
}


// <ul id="dropdown1" ref="dropdown" class="dropdown-content">
// 	<li><a href="#!">one</a></li>
// 	<li><a href="#!">two</a></li>
// 	<li class="divider"></li>
// 	<li><a href="#!">three</a></li>
// </ul>