import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import {
	Layout,
	Hero,
	About,
	Experience,
	Projects,
	Footer,
	Side,
} from "../components/";
import { theme } from "../styles";
const { colors, fontSizes } = theme;

const StyledMain = styled.main`
	padding: 0 250px;
	margin: 0 auto;
	width: 100%;
	max-width: 1600px;
	min-height: 100vh;
	padding-top: 225px;
	padding-bottom: 200px;

	@media (max-width: 728px) {
		padding: 0 20px;
		padding-top: 175px;
	}
`;

const StyledSection = styled.section`
	width: 800px;

	@media (max-width: 728px) {
		width: 100%;
	}
`;

const IndexPage = ({ location, data }) => {
	const { hero, about, experience, projects } = data;
	return (
		<>
			<Helmet>
				<meta property="og:image" content="../../static/homeLandingPage.png" />
				<meta property="og:title" content="Trevor's Portfolio Website" />
				<meta
					property="og:description"
					content="Personal website with latest projects and contributions"
				/>
			</Helmet>
			<Layout>
				<StyledMain>
					<StyledSection>
						<Side />
						<Hero data={hero.edges} />
						<About data={about.edges} />
						<Experience data={experience.edges} />
						<Projects data={projects.edges} />
					</StyledSection>
				</StyledMain>
				<Footer />
			</Layout>
		</>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	{
		hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
			edges {
				node {
					frontmatter {
						title
						name
						description
					}
					html
				}
			}
		}

		about: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/about/" } }
		) {
			edges {
				node {
					frontmatter {
						title
						paragraphOne
						paragraphTwo
						languageTitle
						frontEnd
						backEnd
					}
					html
				}
			}
		}

		experience: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/experience/" } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						company
						location
						date
						url
						descriptionOne
					}
				}
			}
		}

		projects: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/projects/" } }
		) {
			edges {
				node {
					frontmatter {
						title
						projectOne
						projectOneDesc
						projectOneTech
						projectThree
						projectThreeDesc
						projectThreeTech
					}
				}
			}
		}
	}
`;
