import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-info">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Authentication System JWT</span>
				</Link>
				
			</div>
		</nav>
	);
};
