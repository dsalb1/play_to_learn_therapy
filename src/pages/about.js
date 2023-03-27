import React from "react";

import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import bridget_image from "../images/bridget_professional.png";
import jenny_image from "../images/no_image_available_round.png";

const AboutPage = () => {
	return (
		<React.Fragment>
			<Layout id="about-us" pageTitle="About Us">
				<Bio image={bridget_image} alt="Bridget Salberg professional image">
					Bridget Salberg is a pediatric speech-language pathologist who is educated and skilled in play-based
					therapy and a framework of Gestalt Language Processing. She received both her bachelor's (2012) and
					Master of Arts (2013) in Communication Disorders from Truman State University. She has worked in the
					schools for 10 years with children of all ages. Bridget places emphasis on creating a therapy that
					is centered around client interests and she is well versed at delivering evidence-based practice
					regarding speech sound systems, language development, fluency, and Augmentative/Alternative
					Communication systems. When she's not working, you can find her relaxing with her husband and her
					hound dog, reading, listening to podcasts, and cooking.
				</Bio>
				<Bio image={jenny_image} alt="Jenny Smegner professional image">
					Jenny Smegner has her bachelor's in occupational therapy from St. Louis University (2003) and her
					Masters in Health Sciencea from the University of Indianapolis (2008). She has worked as an
					occupational therapist for the Special School District for 19 years. She specializes in working with
					kids who have autism and developmental delays. Jenny works closely with teachers, parents, physical
					therapists, and speech and language pathologists. She also runs a motor lab for kindergarteners to
					assist them in building a solid motor foundation to prepare them for academic learning. Prior to
					working as an occupational therapist, Jenny was an ABA therapist where she worked with preschool and
					school-age children and their families. Jenny is married and has four kids. She loves dogs and
					helping others. Her favorite hobby is crafting, being with her kids, and serving others.
				</Bio>
			</Layout>
			<Footer />
		</React.Fragment>
	);
};

export const Head = () => <title>Play to Learn Therapy - About Us</title>;

export default AboutPage;
