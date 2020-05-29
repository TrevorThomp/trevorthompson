import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Nav } from "./";
import { theme } from "../styles";
const { colors } = theme;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;
`;

const StyledLink = styled(Link)`
	color: ${colors.lightGreen};
	text-decoration: none;
`;

const Header = ({ siteTitle }) => (
	<StyledHeader>
		<div>
			<h1>
				<StyledLink to="/">{siteTitle}</StyledLink>
			</h1>
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
