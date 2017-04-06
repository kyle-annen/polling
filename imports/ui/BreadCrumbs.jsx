import React from 'react';

export default class BreadCrumbs extends React.Component {
	constructor(props) {
		super(props);
		this.getBreadcrumbs = this.getBreadcumbs.bind(this);
	}

	getBreadcumbs() {
		const path = window.location.pathname;
		const pathArray = path.split("/");
		let breadCrumbPaths = ["/"];
		let breadCrumbs = "";
		for (let i = 1 ; i < pathArray.length; i++) {
			pathArray.slice(0, i + 1).join("/");
		}

		for (let i = 1; i < pathArray.length; i++) {
			breadCrumbs += <a href={ breadCrumbPaths[ i - 1 ]} className="breadcrumb">{ pathArray[i] }</a>
		}
		return breadCrumbs;
	}

	render() {
		const breadCrumbs = this.getBreadcumbs;
		return (
					<div className="col s12">
						{breadCumbs}
					</div>
		)
	}
}