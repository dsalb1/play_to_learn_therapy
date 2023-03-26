import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const NotFoundPage = () => {
	return (
		<Layout id="404">
			<h1>Page not found - 404</h1>
			<p>
				Sorry, we couldn’t find what you were looking for.
				<br />
				<Link to="/">Go home</Link>.
			</p>
		</Layout>
	);
}

export default NotFoundPage

export const Head = () => <title>Not found - 404</title>
