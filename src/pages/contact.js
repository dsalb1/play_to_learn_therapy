import React from 'react';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const ContactPage = () => {
  return (
		<React.Fragment>
			<Layout id="contact" pageTitle="Contact Us">
			</Layout>
			<Footer />
		</React.Fragment>
  );
}

export const Head = () => (
	<Seo>
		<meta
			name="description="
			content="Learn how to contact us at Play to Learn Therapy STL"
		/>
		<title>Play to Learn Therapy - Contact Us</title>
	</Seo>
);

export default ContactPage