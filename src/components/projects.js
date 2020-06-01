import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors } = theme;

const StyledProjectsWrapper = styled.div`
	height: 50vh;
`;

const Projects = ({ data }) => {
	const { title, paragraphOne, paragraphTwo } = data[0].node.frontmatter;
	return (
		<StyledProjectsWrapper id="projects">
			<h2>{title}</h2>
		</StyledProjectsWrapper>
	);
};

export default Projects;
