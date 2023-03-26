import React from "react";

import bridget_image from "../images/bridget_professional.png";

const Bio = (props) => {
	return (
		<div className="bio">
			<img src={bridget_image} alt={props.alt} />
			<p>
				{props.children}
			</p>
		</div>
	)
};

export default Bio;