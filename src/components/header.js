import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Nav } from "./";
import { theme } from "../styles";
const { colors, fontSizes, hamburgerStyles } = theme;
import { stack as Menu } from "react-burger-menu";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;

	@media (max-width: 728px) {
		padding: 20px;
	}
`;

const StyledLink = styled(Link)`
	font-size: ${fontSizes.h1};
	color: ${colors.lightGreen};
	text-decoration: none;
`;

const StyledOuterContainer = styled.div`
	@media (min-width: 728px) {
		display: none;
	}
`;

const Header = ({ siteTitle }) => (
	<StyledHeader>
		<div>
			<StyledLink to="/">{siteTitle}</StyledLink>
		</div>
		<Nav />
		<StyledOuterContainer>
			<Menu disableCloseOnEsc styles={hamburgerStyles} right width={200}>
				<a id="home" className="menu-item" href="/">
					Home
				</a>
				<a id="about" className="menu-item" href="/about">
					About
				</a>
				<a id="experience" className="menu-item" href="/contact">
					Experience
				</a>
				<a className="menu-item--small" href="">
					Work
				</a>
				<a id="contact" className="menu-item--small" href="">
					Contact
				</a>
			</Menu>
		</StyledOuterContainer>
	</StyledHeader>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
