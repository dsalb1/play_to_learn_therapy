// Step 1: Import React
import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
		<>
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
		</>
  );
}

export const Head = () => <title>Play to Learn Therapy - Home</title>

export default IndexPage