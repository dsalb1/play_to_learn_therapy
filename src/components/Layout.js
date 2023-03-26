import React, { useState } from 'react';

import '../style/layout.scss';
import Burger from './Burger';
import Circle from './Circle';
import MainNav from './MainNav';

const Layout = ({pageTitle, children}) => {
	const [open, setOpen] = useState(false);

	const toggleBurgerHandler = () => {
		console.log('Hamburger Open!');
		setOpen(!open);
	}

	return (
		<div id="home" className="container">
			<Burger open={open} onClickHandler={toggleBurgerHandler}/>
			{open && <MainNav />}
			<main>
				<Circle>
					<p className="heading">Play to Learn Therapy</p>
					<p className="content">Speech and Occupational Therapy Summer 2023</p>
				</Circle>
				<h1>{pageTitle}</h1>
				<div className="main-content">
					{children}
				</div>
			</main>
		</div>
	);
}

export default Layout;