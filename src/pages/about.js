import React from 'react';

import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Layout from '../components/Layout';


const AboutPage = () => {
  return (
	<React.Fragment>
		<Layout pageTitle="About Us">
			<AboutUs />
		</Layout>
		<Footer />
	</React.Fragment >
  )
}

export const Head = () => <title>Play to Learn Therapy - About Us</title>

export default AboutPage