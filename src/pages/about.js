import React from 'react';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';


const AboutPage = () => {
  return (
	<React.Fragment>
		<Layout id="about-us" pageTitle="About Us">
			<Bio image="bridget_professional.png" alt="Bridget Salberg professional image">
				Bridget is a pediatric speech-language pathologist who is educated and skilled in play-based therapy and
				a framework of Gestalt Language Processing. She places emphasis on creating a therapy that is centered
				around client interests and she is well versed at delivering evidence-based practice regarding speech
				sound systems, language development, fluency, and Augmentative/Alternative Communication systems.
			</Bio>
		</Layout>
		<Footer />
	</React.Fragment >
  )
}

export const Head = () => <title>Play to Learn Therapy - About Us</title>

export default AboutPage