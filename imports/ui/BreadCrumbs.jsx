import React from 'react';
//import Link for react routing.
import { Link } from 'react-router-dom';

export default class BreadCrumbs extends React.Component {
	constructor(props) {
		super(props);
		//bind function
		this.getBreadcrumbs = this.getBreadcumbs.bind(this);
	}

	//function gets the current path and produces a 2d array of relative paths and names
	// ex. the path:
	// /about/team 
	// would return:
	// [["/", "home"], ["/about", "about"], ["/about/team", "team"]]
	getBreadcumbs() {
		const path = window.location.pathname;
		const pathArray = path.split("/");
		let breadCrumbPaths = ["/"];
		let breadCrumbs = [];
		for (let i = 1 ; i < pathArray.length; i++) {
			breadCrumbPaths.push(pathArray.slice(0, i + 1).join("/"));
		}
		pathArray[0] = "home";
		for (let i = 0; i < pathArray.length; i++) {
			breadCrumbs.push([breadCrumbPaths[i], pathArray[i]]);
		}
		console.log(breadCrumbs);
		return breadCrumbs;
	}

	render() {
		const breadCrumbs = this.getBreadcumbs();
		return (
			<div className="container">
				<div className="col s12" id="bread-crumb-col">
					{breadCrumbs.map((breadCrumb, index) => (
						<a key={index} className="breadcrumb-link">
							<Link to={breadCrumb[0]}>
								{breadCrumb[1]}
							</Link>
							{index < breadCrumbs.length - 1 ? "    >    " : ""}
						</a>
					))}
				</div>
			</div>
		)
	}
}