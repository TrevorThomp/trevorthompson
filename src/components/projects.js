import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { theme } from "../styles";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;
import Img from "gatsby-image";

const StyledProjectsWrapper = styled.div`
	height: 80vh;
	width: 1000px;

	p {
		font-family: ${font.roboto};
		font-size: ${fontSizes.md};
		line-height: 1.6;
		width: 80%;

		@media (max-width: 728px) {
			width: 100%;
		}
	}

	h3 {
		color: ${secondColors.greenTeal};
		font-family: ${font.exo2};
	}

	li {
		position: relative;
		padding-left: 20px;
		font-family: ${font.roboto};
		font-size: ${fontSizes.md};
		color: ${secondColors.slateWhite};
		list-style-type: none;
		&:before {
			content: "▹";
			position: absolute;
			left: 0;
			color: ${secondColors.teal};
			font-size: ${fontSizes.md};
		}
	}

	@media (max-width: 728px) {
		height: 170vh;
		width: 100%;
	}
`;

const StyledTitle = styled.h2`
	color: ${secondColors.teal};
	font-family: ${font.exo2};

	&:after {
		content: "";
		display: block;
		height: 1px;
		width: 300px;
		background-color: ${secondColors.greenTeal};
		position: relative;
		top: -15px;
		margin-left: 240px;

		@media (max-width: 728px) {
			top: -12px;
			width: 115px;
			margin-left: 210px;
		}
	}
`;

const StyledProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 25px;

	@media (max-width: 728px) {
		margin: 0;
	}
`;

const StyledProjectContainerWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 728px) {
		flex-direction: column;
	}
`;

const StyledImage = styled(Img)`
	width: 100%;
	// height: 250px;
	max-width: 100%;
	border-radius: ${borderRadius};
	border: 1px solid ${secondColors.teal};
	padding: 50px;
	margin-bottom: 50px;

	@media (max-width: 728px) {
		width: 325px;
	}
`;

const StyledImageContainer = styled.div`
	width: 800px;
	// height: 400px;
`;

const Projects = ({ data }) => {
	const {
		title,
		projectOne,
		projectOneDesc,
		projectOneTech,
		projectTwo,
		projectTwoDesc,
		projectTwoImg,
		projectTwoTech,
	} = data[0].node.frontmatter;

	const revealContainer = useRef(null);
	useEffect(() => scrollReveal.reveal(revealContainer.current, srConfig()), []);
	return (
		<StyledProjectsWrapper id="projects" ref={revealContainer}>
			<StyledTitle>{title}</StyledTitle>
			<StyledProjectContainerWrapper>
				<StyledProjectContainer>
					<h3 style={{}}>{projectOne}</h3>
					<p>{projectOneDesc}</p>
					<ul style={{}}>
						{projectOneTech.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</StyledProjectContainer>
				<StyledImageContainer>
					<StyledImage
						fluid={projectTwoImg.childImageSharp.fluid}
					></StyledImage>
				</StyledImageContainer>
			</StyledProjectContainerWrapper>

			<StyledProjectContainerWrapper>
				<StyledProjectContainer>
					<h3>{projectTwo}</h3>
					<p>{projectTwoDesc}</p>
					<ul>
						{projectTwoTech.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</StyledProjectContainer>
				<StyledImageContainer>{/* <Img></Img> */}</StyledImageContainer>
			</StyledProjectContainerWrapper>
		</StyledProjectsWrapper>
	);
};

export default Projects;
