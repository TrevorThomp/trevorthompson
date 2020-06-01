import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors } = theme;

const StyledH2 = styled.h2`
	color: ${secondColors.slateWhite};
	font-size: ${fontSizes.title};

	@media (max-width: 728px) {
		font-size: ${fontSizes.h1};
	}
`;

const StyledP = styled.p`
	font-size: ${fontSizes.md};
	color: ${secondColors.teal};
	margin-bottom: 15px;
`;

const StyledEmailAnchor = styled.a`
	color: #d3d3d3;
	padding: 20px 25px;
	border: 1px solid ${secondColors.teal};
	font-size: ${fontSizes.md};
	border-radius: ${borderRadius};
	background-color: transparent;
	transition: ${theme.transition};
	text-decoration: none;
	outline: none;

	&:hover {
		cursor: pointer;
		background-color: ${secondColors.greenTeal};
	}

	&:after {
		display: none !important;
	}
`;

const StyledText = styled.p`
	font-size: ${fontSizes.xl};
	color: ${secondColors.slateWhite};
	width: 500px;
	margin-bottom: 50px;

	@media (max-width: 728px) {
		width: 100%;
	}
`;

const Hero = ({ name }) => {
	return (
		<Fade delay={2000} duration={2000} left>
			<section>
				<StyledP>Hi, my name is</StyledP>
				<StyledH2>{name}</StyledH2>
				<StyledText>
					I'm a software engineer based in Bend, OR specializing in building
					exceptional websites and applications.
				</StyledText>
				<StyledEmailAnchor href="mailto:trevor.ray.thompson@gmail.com">
					Let's Connect
				</StyledEmailAnchor>
			</section>
		</Fade>
	);
};

export default Hero;
