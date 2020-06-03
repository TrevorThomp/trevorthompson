import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;

const StyledH2 = styled.h2`
	color: ${secondColors.fadedTeal};
	font-family: ${font.exo2};
	font-size: ${fontSizes.smTitle};
	text-transform: uppercase;

	@media (max-width: 728px) {
		font-size: ${fontSizes.h1};
	}
`;

const StyledP = styled.p`
	font-family: ${font.roboto};
	font-size: ${fontSizes.md};
	color: ${secondColors.teal};
	margin-bottom: 15px;
`;

const StyledResumeButton = styled.a`
	color: #d3d3d3;
	padding: 15px 20px;
	border: 1px solid ${secondColors.teal};
	font-family: ${font.roboto};
	font-size: ${fontSizes.sm};
	border-radius: ${borderRadius};
	background-color: transparent;
	transition: ${theme.transition};
	outline: none;
	text-decoration: none;

	&:hover {
		cursor: pointer;
		background-color: ${secondColors.greenTeal};
	}

	&:after {
		display: none !important;
	}
`;

const StyledText = styled.p`
	font-family: ${font.roboto};
	font-size: ${fontSizes.xl};
	color: ${secondColors.slateWhite};
	width: 500px;
	margin-bottom: 50px;

	@media (max-width: 728px) {
		width: 100%;
	}
`;

const StyledContainer = styled.section`
	height: 90vh;
`;

const Hero = ({ data }) => {
	const { title, name, description } = data[0].node.frontmatter;
	const { html } = data[0].node;
	console.log(data);
	return (
		<Fade delay={2000} duration={2000} left>
			<StyledContainer>
				<StyledP>{title}</StyledP>
				<StyledH2>{name}</StyledH2>
				<StyledText>{description}</StyledText>
				<StyledResumeButton href="mailto:trevor.ray.thompson@gmail.com">
					Let's Connect
				</StyledResumeButton>
			</StyledContainer>
		</Fade>
	);
};

export default Hero;
