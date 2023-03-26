import React from "react";

const AboutUs = () => {
	const bridgetCreds = 'MA, CCC-SLP';
	const jennyCreds = 'MHS, OTR/L';

	return (
		<div className="about">
			<p className="primary">
				Summertime speech and occupational therapy provided by Bridget Salberg <span>{bridgetCreds}</span> and
				Jenny Smegner <span>{jennyCreds}</span>
			</p>
			<ul>
				<li>Combined 30+ years of pediatric experience</li>
				<li>Addressing concerns of speech and language delays and fine and visual motor skills</li>
				<li>Located in Webster Groves/Sunset Hills</li>
			</ul>
		</div>
	);
}

export default AboutUs;