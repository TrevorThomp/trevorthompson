import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
import { theme } from "../styles";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;

const StyledAboutWrapper = styled.div`
	height: 90vh;

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

const StyledBackEnd = styled.h4`
  margin-right 40px;

  @media (max-width: 728px) {
    margin-right: 50px;
  }
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
		margin-left: 150px;

		@media (max-width: 728px) {
			top: -12px;
			width: 190px;
			margin-left: 130px;
		}
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
			<StyledTitle>{title}</StyledTitle>
			<StyledParagraph>{paragraphOne}</StyledParagraph>
			<StyledParagraph>{paragraphTwo}</StyledParagraph>
			<h3>{languageTitle}</h3>
			<StyledLanguageTitles>
				<h4>Front-End</h4>
				<StyledBackEnd>Back-End</StyledBackEnd>
			</StyledLanguageTitles>
			<StyledLanguageWrapper>
				<SkillsContainer>
					{frontEnd.map((item, i) => (
						<Skill key={i}>{item}</Skill>
					))}
				</SkillsContainer>
				<SkillsContainer>
					{backEnd.map((item, i) => (
						<Skill key={i}>{item}</Skill>
					))}
				</SkillsContainer>
			</StyledLanguageWrapper>
		</StyledAboutWrapper>
	);
};

export default About;
