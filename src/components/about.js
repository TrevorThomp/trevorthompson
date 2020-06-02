import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;

const StyledAboutWrapper = styled.div`
	height: 70vh;

	h2 {
		color: ${secondColors.teal};
		font-family: ${font.exo2};
	}

	h3,
	h4 {
		color: ${secondColors.greenTeal};
		font-family: ${font.roboto};
	}
`;

const StyledParagraph = styled.p`
	font-family: ${font.roboto};
`;

const StyledLanguageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledLanguageTitles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0;
`;

const SkillsContainer = styled.ul`
	display: flex;
	flex-direction: column;
	font-family: ${font.roboto};
	overflow: hidden;
	padding: 0;
	margin: 0;
	list-style: none;
`;

const Skill = styled.li`
	position: relative;
	padding-left: 20px;
	font-size: ${fontSizes.sm};
	color: ${secondColors.slateWhite};
	&:before {
		content: "▹";
		position: absolute;
		left: 0;
		color: ${secondColors.teal};
		font-size: ${fontSizes.sm};
	}
`;

const About = ({ data }) => {
	const {
		title,
		paragraphOne,
		paragraphTwo,
		languageTitle,
		frontEnd,
		backEnd,
	} = data[0].node.frontmatter;
	const revealContainer = useRef(null);
	useEffect(() => scrollReveal.reveal(revealContainer.current, srConfig()), []);
	return (
		<StyledAboutWrapper id="about" ref={revealContainer}>
			<h2>{title}</h2>
			<StyledParagraph>{paragraphOne}</StyledParagraph>
			<StyledParagraph>{paragraphTwo}</StyledParagraph>
			<h3>{languageTitle}</h3>
			<StyledLanguageTitles>
				<h4>Front-End</h4>
				<h4 style={{ marginRight: "40px" }}>Back-End</h4>
			</StyledLanguageTitles>
			<StyledLanguageWrapper>
				<SkillsContainer>
					{frontEnd.map((item) => (
						<Skill>{item}</Skill>
					))}
				</SkillsContainer>
				<SkillsContainer>
					{backEnd.map((item) => (
						<Skill>{item}</Skill>
					))}
				</SkillsContainer>
			</StyledLanguageWrapper>
		</StyledAboutWrapper>
	);
};

export default About;
