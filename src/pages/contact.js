import React from 'react';

import Footer from '../components/Footer';
import Layout from '../components/Layout';


const ContactPage = () => {
  return (
		<React.Fragment>
			<Layout id="contact" pageTitle="Contact Us">
			</Layout>
			<Footer />
		</React.Fragment>
  );
}

export const Head = () => <title>Play to Learn Therapy - Contact Us</title>

export default ContactPage