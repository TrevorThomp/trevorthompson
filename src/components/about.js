import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors } = theme;

const StyledAboutWrapper = styled.div`
	height: 70vh;
`;

const About = ({ data }) => {
	const { title, paragraphOne, paragraphTwo } = data[0].node.frontmatter;
	const revealContainer = useRef(null);
	useEffect(() => scrollReveal.reveal(revealContainer.current, srConfig()), []);
	return (
		<StyledAboutWrapper id="about" ref={revealContainer}>
			<h2>{title}</h2>
			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
		</StyledAboutWrapper>
	);
};

export default About;
