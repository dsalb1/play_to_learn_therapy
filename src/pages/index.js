import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'


import Layout from '../components/Layout'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
		<React.Fragment>
			<Layout>
				<div className="main-content">
					<StaticImage
						className="sand-image"
						alt="Children playing in sand"
						layout="fixed"
						width={400}
						height={400}
						src="../images/sand.jpeg"
					/>
					<AboutUs />
				</div>
			</Layout>
			<Footer />
		</React.Fragment>
  );
}

export const Head = () => <title>Play to Learn Therapy - Home</title>

export default IndexPage