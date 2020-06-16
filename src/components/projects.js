import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../styles";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;

const StyledProjectsWrapper = styled.div`
	height: 120vh;
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

// const StyledImage = styled.img`
// 	max-width: 300px;
// 	max-width: 100%;
// 	border-radius: ${borderRadius};
// 	border: 1px solid ${secondColors.teal};
// 	padding: 10px;
// 	margin-bottom: 50px;

// 	@media (max-width: 728px) {
// 		width: 325px;
// 	}
// `;

const StyledImageContainer = styled.div`
	img {
		opacity: 0.5;
		transition: opacity 0.25s ease-in-out;
		-moz-transition: opacity 0.25s ease-in-out;
		-webkit-transition: opacity 0.25s ease-in-out;
	}

	img:hover {
		cursor: pointer;
		opacity: 1 !important;
	}
`;

const Projects = ({ data }) => {
	const {
		title,
		projectOne,
		projectOneDesc,
		projectOneTech,
		projectOneImg,
		projectTwo,
		projectTwoDesc,
		projectTwoImg,
		projectTwoTech,
		projectThree,
		projectThreeDesc,
		projectThreeTech,
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
						{projectOneTech.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</StyledProjectContainer>
				<StyledImageContainer>
					<a
						// style={{ opacity: 0.3 }}
						href="https://sosbend.com/"
						target="_blank"
					>
						<img
							style={{
								padding: "10px",
								width: "1200px",
								height: "225px",
								borderRadius: `${borderRadius}`,
								border: `1px solid ${secondColors.teal}`,
								opacity: 0.5,
							}}
							src={`sosBend.png`}
						></img>
					</a>
				</StyledImageContainer>
			</StyledProjectContainerWrapper>

			<StyledProjectContainerWrapper>
				<StyledProjectContainer>
					<h3>{projectThree}</h3>
					<p>{projectThreeDesc}</p>
					<ul>
						{projectThreeTech.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</StyledProjectContainer>
				<StyledImageContainer>
					<a href="https://www.habitatlapinesunriver.org/" target="_blank">
						<img
							style={{
								padding: "10px",
								width: "1415px",
								height: "225px",
								borderRadius: `${borderRadius}`,
								border: `1px solid ${secondColors.teal}`,
							}}
							src={`habitat.png`}
						></img>
					</a>
				</StyledImageContainer>
			</StyledProjectContainerWrapper>

			<StyledProjectContainerWrapper>
				<StyledProjectContainer>
					<h3>{projectTwo}</h3>
					<p>{projectTwoDesc}</p>
					<ul>
						{projectTwoTech.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</StyledProjectContainer>
				<StyledImageContainer>
					<a href="https://trevorthomp.github.io/Can-U/" target="_blank">
						<img
							style={{
								padding: "10px",
								width: "980px",
								height: "225px",
								borderRadius: `${borderRadius}`,
								border: `1px solid ${secondColors.teal}`,
							}}
							src={`jobBoard.png`}
						></img>
					</a>
				</StyledImageContainer>
			</StyledProjectContainerWrapper>
		</StyledProjectsWrapper>
	);
};

export default Projects;
