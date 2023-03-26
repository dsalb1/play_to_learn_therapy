import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
		<React.Fragment>
			<Layout id="home">
				{/* <div className="main-content"> */}
					<StaticImage
						className="sand-image"
						alt="Children playing in sand"
						layout="fixed"
						width={400}
						height={400}
						src="../images/sand_playing.jpeg"
					/>
					<AboutUs />
				{/* </div> */}
			</Layout>
			<Footer />
		</React.Fragment>
  );
}

export const Head = () => <title>Play to Learn Therapy - Home</title>

export default IndexPage