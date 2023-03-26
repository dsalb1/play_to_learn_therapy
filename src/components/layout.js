import React from 'react';

import '../style/layout.scss';
import Circle from '../components/Circle';
import MainNav from '../components/MainNav';

const Layout = (props) => {
	return (
		<div id="home" className="container">
			<MainNav />
			<main>
				<h1>{props.pageTitle}</h1>
				<Circle>
					<p className="heading">Play to Learn Therapy</p>
					<p className="content">Speech and Occupational Therapy Summer 2023</p>
				</Circle>
				{props.children}
			</main>
		</div>
	);
}

export default Layout