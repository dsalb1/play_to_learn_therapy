import React from "react";
import { Link } from 'gatsby';

import "../style/nav.scss";

const MainNav = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>

		</nav>
	);
}

export default MainNav;