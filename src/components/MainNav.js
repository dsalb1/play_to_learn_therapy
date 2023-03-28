import React from "react";
import { Link } from 'gatsby';

import "../style/nav.scss";

const MainNav = () => {
	return (
		<nav>
			<Link className="index" to="/">Home</Link>
			<Link className="about-link" to="/about">About</Link>
			<Link className="contact-link" to="/contact">Contact</Link>
		</nav>
	);
}

export default MainNav;