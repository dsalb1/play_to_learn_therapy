import * as React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'


const ContactPage = () => {
  return (
		<>
			<Layout pageTitle="Contact Us">
				<p>
					For more information<br></br>Contact Jenny at 314-705-4425
				</p>
			</Layout>
			<Footer />
		</>
  );
}

export const Head = () => <title>Play to Learn Therapy - Contact Us</title>

export default ContactPage