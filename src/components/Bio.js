import React from "react";

const Bio = (props) => {
	return (
		<div className="bio">
			<img width="150" height="150" src={props.image} alt={props.alt} />
			<p>
				{props.children}
			</p>
		</div>
	)
};

export default Bio;