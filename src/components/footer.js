import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { font, fontSizes, secondColors } = theme;

const StyledFooter = styled.footer`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	font-family: ${font.roboto};
	font-size: ${fontSizes.md};

	&:after {
		content: "";
		height: 1rem;
		width: 100%;
		position: absolute;
		// bottom: -1px;
		bottom: 0px;
		left: 0px;
		background-color: ${secondColors.teal};
		background-image: linear-gradient(
			315deg,
			${secondColors.smokyBlack} 1%,
			${secondColors.teal} 100%
		);
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p style={{ paddingBottom: "25px", paddingTop: "25px" }}>
				&copy; Copyright 2020 - Trevor Thompson
			</p>
		</StyledFooter>
	);
};

export default Footer;
