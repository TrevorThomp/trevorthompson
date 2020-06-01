import React from "react";
import Fade from "react-reveal";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Layout, Hero, About, Header } from "../components/";
import { theme } from "../styles";
const { colors, fontSizes } = theme;

const StyledMain = styled.main`
	padding: 0 250px;
	margin: 0 auto;
	width: 100%;
	max-width: 1600px;
	min-height: 100vh;
	padding-top: 75px;
	padding-bottom: 200px;

	@media (max-width: 728px) {
		padding: 0 20px;
		padding-top: 100px;
	}
`;

const StyledSection = styled.section`
	width: 700px;

	@media (max-width: 728px) {
		width: 100%;
	}
`;

const IndexPage = ({ location, data }) => {
	const { hero, about } = data;
	return (
		<Layout>
			<StyledMain>
				<StyledSection>
					<Hero data={hero.edges} />
					<About data={about.edges} />
				</StyledSection>
			</StyledMain>
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
					}
					html
				}
			}
		}
	}
`;
