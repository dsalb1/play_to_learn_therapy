import React from 'react';

import '../style/layout.scss';
import Circle from './Circle';
import MainNav from './MainNav';

const Layout = ({pageTitle, children}) => {
	return (
		<div id="home" className="container">
			<MainNav />
			<main>
				<h1>{pageTitle}</h1>
				<Circle>
					<p className="heading">Play to Learn Therapy</p>
					<p className="content">Speech and Occupational Therapy Summer 2023</p>
				</Circle>
				{children}
			</main>
		</div>
	);
}

export default Layout;