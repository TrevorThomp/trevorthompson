import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors } = theme;

const StyledH2 = styled.h2`
	color: ${secondColors.greenTeal};
	font-size: ${fontSizes.h1};
`;

const StyledEmailAnchor = styled.a`
	color: #d3d3d3;
	padding: 10px 15px;
	border: 1px solid ${secondColors.teal};
	font-size: ${fontSizes.sm};
	border-radius: ${borderRadius};
	background-color: transparent;
	transition: ${theme.transition};
	text-decoration: none;
	outline: none;

	&:hover {
		cursor: pointer;
		background-color: ${secondColors.teal};
	}

	&:after {
		display: none !important;
	}
`;

const StyledText = styled.p`
	color: ${secondColors.slateWhite};
`;

const Hero = ({ name }) => {
	return (
		<Fade delay={2000} left>
			<section>
				<p>Hi, my name is</p>
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
