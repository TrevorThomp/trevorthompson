import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { theme } from "../styles";
import { Link, animateScroll as scroll } from "react-scroll";
const { colors, fontSizes, borderRadius, secondColors } = theme;

const StyledExperienceWrapper = styled.div`
	height: 70vh;
`;

const Experience = ({ data }) => {
	const { title, paragraphOne, paragraphTwo } = data[0].node.frontmatter;

	function scrollToTop() {
		scroll.scrollToTop();
	}
	return (
		<StyledExperienceWrapper id="experience">
			<h2>{title}</h2>
			<button onClick={scrollToTop}>TESTING</button>
		</StyledExperienceWrapper>
	);
};

export default Experience;
