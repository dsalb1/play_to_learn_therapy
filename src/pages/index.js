// Step 1: Import React
import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

// Step 2: Define your component
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

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Play to Learn Therapy - Home</title>

// Step 3: Export your component
export default IndexPage