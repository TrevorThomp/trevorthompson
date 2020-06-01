import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors } = theme;

const StyledAboutWrapper = styled.div`
	height: 100vh;
`;

const About = ({ data }) => {
	const { title, paragraphOne, paragraphTwo } = data[0].node.frontmatter;
	return (
		<StyledAboutWrapper id="about">
			<h2>{title}</h2>
			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
		</StyledAboutWrapper>
	);
};

export default About;
