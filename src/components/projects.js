import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../styles";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;
// import DashboardImage from "../images/dashboard.png";

const StyledProjectsWrapper = styled.div`
	height: 110vh;
	width: 1200px;

	p {
		font-family: ${font.roboto};
		font-size: ${fontSizes.md};
		line-height: 1.6;
	}

	h3 {
		color: ${secondColors.greenTeal};
		font-family: ${font.exo2};
	}

	li {
		position: relative;
		padding-left: 20px;
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
`;

const StyledProjectContainerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledImage = styled.img`
	width: 700px;
	height: 400px;
`;

const Projects = ({ data }) => {
	const {
		title,
		projectOne,
		projectOneDesc,
		projectOneTech,
		projectTwo,
		projectTwoDesc,
		projectTwoImage,
		projectTwoTech,
	} = data[0].node.frontmatter;
	const revealContainer = useRef(null);
	useEffect(() => scrollReveal.reveal(revealContainer.current, srConfig()), []);
	return (
		<StyledProjectsWrapper id="projects" ref={revealContainer}>
			<StyledTitle>{title}</StyledTitle>
			<StyledProjectContainerWrapper>
				<StyledProjectContainer>
					<h3>{projectOne}</h3>
					<p>{projectOneDesc}</p>
					<ul>
						{projectOneTech.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</StyledProjectContainer>
				<div>
					{/* <StyledImage src={`dashboard.png`} alt="dashboard"></StyledImage> */}
				</div>
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
				<div>
					<StyledImage src={`dashboard.png`} alt="dashboard"></StyledImage>
				</div>
			</StyledProjectContainerWrapper>
		</StyledProjectsWrapper>
	);
};

export default Projects;
