import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Layout, SEO } from "../components";
import { theme } from "../styles";
const { colors, fontSizes } = theme;

const StyledMain = styled.main`
	padding: 0 150px;
	margin: 0 auto;
	width: 100%;
	max-width: 1600px;
	min-height: 100vh;
	padding-top: 200px;
	padding-bottom: 200px;
`;

const StyledSpan = styled.span`
	color: ${colors.lightGreen};
`;

const StyledSection = styled.section`
	width: 500px;
`;

const IndexPage = ({ data }) => {
	const { hero } = data;
	const { frontmatter } = hero.edges[0].node;
	console.log(frontmatter);
	return (
		<Layout>
			<StyledMain>
				<StyledSection>
					<h2>
						Hi, my name is <StyledSpan>{frontmatter.name}</StyledSpan>
					</h2>
					<p>
						I'm a software engineer based in Bend, OR specializing in building
						exceptional websites and applications.
					</p>
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
					}
					html
				}
			}
		}
	}
`;
