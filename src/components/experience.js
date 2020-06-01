import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors } = theme;

const StyledExperienceWrapper = styled.div`
	height: 100vh;
`;

const Experience = ({ data }) => {
	const { title, paragraphOne, paragraphTwo } = data[0].node.frontmatter;
	return (
		<StyledExperienceWrapper id="experience">
			<h2>{title}</h2>
		</StyledExperienceWrapper>
	);
};

export default Experience;
