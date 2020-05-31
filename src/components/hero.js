import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius } = theme;

const StyledH2 = styled.h2`
	color: ${colors.lightGreen};
`;

const StyledResumeButton = styled.button`
	color: #d3d3d3;
	padding: 5px 10px;
	border: 1px solid ${colors.lightGreen};
	font-size: ${fontSizes.sm};
	border-radius: ${borderRadius};
	background-color: transparent;
	transition: ${theme.transition};
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
			<StyledResumeButton>Let's Connect</StyledResumeButton>
		</section>
	);
};

export default Hero;
