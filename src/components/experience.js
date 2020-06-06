import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
import { theme } from "../styles";
import { Link, animateScroll as scroll } from "react-scroll";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;

const StyledExperienceWrapper = styled.div`
	height: 90vh;
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
		margin-left: 175px;

		@media (max-width: 728px) {
			top: -12px;
			width: 170px;
			margin-left: 150px;
		}
	}
`;

const Experience = ({ data }) => {
	const { title, paragraphOne, paragraphTwo } = data[0].node.frontmatter;
	const revealContainer = useRef(null);
	useEffect(() => scrollReveal.reveal(revealContainer.current, srConfig()), []);

	function scrollToTop() {
		scroll.scrollToTop();
	}
	return (
		<StyledExperienceWrapper id="experience" ref={revealContainer}>
			<StyledTitle>{title}</StyledTitle>
			<button onClick={scrollToTop}>Coming Soon!</button>
		</StyledExperienceWrapper>
	);
};

export default Experience;
