import React from "react";

const Burger = (props) => {
	return (
		<button className={`${props.open ? 'open' : ''} burger`} onClick={props.onClickHandler}>
			<div />
			<div />
			<div />
		</button>
	)
}

export default Burger;