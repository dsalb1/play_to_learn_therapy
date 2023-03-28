import React from "react";

const Burger = (props) => {
	return (
		<button className={`burger ${props.open ? "open" : ""}`} onClick={props.onClickHandler} aria-label="Menu toggle">
			<div />
			<div />
			<div />
		</button>
	);
}

export default Burger;