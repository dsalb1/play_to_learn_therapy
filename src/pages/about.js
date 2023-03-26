import * as React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Layout from '../components/Layout'


const AboutPage = () => {
  return (
	<>
		<Layout pageTitle="About Us">
			<AboutUs />
		</Layout>
		<Footer />
	</>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage