import React, { useState } from 'react';

import '../style/layout.scss';
import Burger from './Burger';
import Circle from './Circle';
import MainNav from './MainNav';

const Layout = (props) => {
	const [open, setOpen] = useState(false);

	const toggleBurgerHandler = () => {
		setOpen(!open);
	}

	return (
		<div id={props.id} className="container">
			<Burger open={open} onClickHandler={toggleBurgerHandler} />
			{open && <MainNav />}
			<main>
				<Circle>
					<p className="heading">Play to Learn Therapy</p>
					<p className="content">Speech and Occupational Therapy Summer 2023</p>
				</Circle>
				{props.pageTitle !== undefined && <h1>{props.pageTitle}</h1>}
				<div className="main-content">
					{props.children}
					</div>
				<div className="bottom">
					<p>
						For more information<br></br>Contact Jenny at 314-705-4425
					</p>
					<Circle />
				</div>
			</main>
		</div>
	);
}

export default Layout;