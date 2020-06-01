import React from "react";
import Fade from "react-reveal";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Layout, Hero } from "../components/";
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
	}
`;

const StyledSection = styled.section`
	width: 700px;

	@media (max-width: 728px) {
		width: 100%;
	}
`;

const IndexPage = ({ location, data }) => {
	const { hero } = data;
	const { frontmatter } = hero.edges[0].node;
	return (
		<Layout location={location}>
			<StyledMain>
				<Fade left delay={2000}>
					<StyledSection>
						<Hero name={frontmatter.name} />
					</StyledSection>
				</Fade>
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
					}
					html
				}
			}
		}
	}
`;
