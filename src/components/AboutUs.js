import React from "react";

const AboutUs = () => {
	const bridgetTitle = 'Bridget Salberg, MA, CCC-SLP,';
	const jennyTitle = 'Jenny Smegner, MHS, OTR/L';
	return (
		<div className="about">
			<p>Summertime speech and occupational therapy provided by {bridgetTitle} and {jennyTitle}</p>
			<ul>
				<li>combined 30+ years of experience</li>
				<li>addressing concerns of speech delays and fine and visual motor skills</li>
				<li>located in Webster Groves/Sunset Hills</li>
			</ul>
		</div>
	);
}

export default AboutUs;