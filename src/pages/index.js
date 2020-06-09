import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
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
import Fade from "react-reveal/Fade";

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
		) {
			edges {
				node {
					frontmatter {
						title
						jobOne
						jobOneTime
						jobOneDescription
						jobOneTech
						jobTwoTitle
						jobTwoTime
						jobTwoDescription
					}
					html
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
						projectTwo
						projectTwoDesc
						projectTwoTech
					}
				}
			}
		}
	}
`;
