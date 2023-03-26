import React from "react";

const AboutUs = () => {
	const bridgetCreds = 'MA, CCC-SLP';
	const jennyCreds = 'MHS, OTR/L';

	return (
		<div className="about">
			<p>
				Summertime speech and occupational therapy provided by Bridget Salberg <sup>{bridgetCreds}</sup> and
				Jenny Smegner <sup>{jennyCreds}</sup>
			</p>
			<ul>
				<li>Combined 30+ years of experience</li>
				<li>Addressing concerns of speech delays and fine and visual motor skills</li>
				<li>Located in Webster Groves/Sunset Hills</li>
			</ul>
		</div>
	);
}

export default AboutUs;