import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Nav } from "./";
import { theme } from "../styles";
const { colors, fontSizes } = theme;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
`;

// const StyledName = styled.h1`
// 	color: ${colors.lightGreen};
// `;

const StyledLink = styled(Link)`
	font-size: ${fontSizes.h1};
	color: ${colors.lightGreen};
	text-decoration: none;
`;

const Header = ({ siteTitle }) => (
	<StyledHeader>
		<div>
			<StyledLink to="/">{siteTitle}</StyledLink>
		</div>
		<Nav />
	</StyledHeader>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
