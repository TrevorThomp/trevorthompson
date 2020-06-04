import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { font, fontSizes } = theme;

const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	font-family: ${font.roboto};
	font-size: ${fontSizes.md};
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p>&copy; Copyright 2020 - Trevor Thompson</p>
		</StyledFooter>
	);
};

export default Footer;
