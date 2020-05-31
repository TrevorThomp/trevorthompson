import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius } = theme;

const StyledH2 = styled.h2`
	color: ${colors.lightGreen};
	font-size: ${fontSizes.h1};
`;

const StyledEmailAnchor = styled.a`
	color: #d3d3d3;
	padding: 10px 15px;
	border: 1px solid ${colors.lightGreen};
	font-size: ${fontSizes.sm};
	border-radius: ${borderRadius};
	background-color: transparent;
	transition: ${theme.transition};
	text-decoration: none;
	outline: none;

	&:hover {
		cursor: pointer;
		background-color: ${colors.fadedGreen};
	}

	&:after {
		display: none !important;
	}
`;

const Hero = ({ name }) => {
	return (
		<section>
			<p>Hi, my name is</p>
			<StyledH2>{name}</StyledH2>
			<p>
				I'm a software engineer based in Bend, OR specializing in building
				exceptional websites and applications.
			</p>
			<StyledEmailAnchor href="mailto:trevor.ray.thompson@gmail.com">
				Let's Connect
			</StyledEmailAnchor>
		</section>
	);
};

export default Hero;
