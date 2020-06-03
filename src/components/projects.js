import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../styles";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
const { colors, fontSizes, borderRadius, secondColors } = theme;

const StyledProjectsWrapper = styled.div`
	height: 90vh;
`;

const Projects = ({ data }) => {
	const { title, paragraphOne, paragraphTwo } = data[0].node.frontmatter;
	const revealContainer = useRef(null);
	useEffect(() => scrollReveal.reveal(revealContainer.current, srConfig()), []);
	return (
		<StyledProjectsWrapper id="projects" ref={revealContainer}>
			<h2>{title}</h2>
		</StyledProjectsWrapper>
	);
};

export default Projects;
