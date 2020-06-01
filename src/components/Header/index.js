import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { Nav } from "../index";
import { theme } from "../../styles";
const { fontSizes, hamburgerStyles, secondColors, borderRadius } = theme;
import { slide as Menu } from "react-burger-menu";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
	height: 100px;

	@media (max-width: 728px) {
		padding: 20px;
	}
`;

const StyledLink = styled(Link)`
	font-size: ${fontSizes.h1};
	color: ${secondColors.teal};
	text-decoration: none;
`;

const StyledOuterContainer = styled.div`
	.bm-burger-bars:nth-of-type(2) {
		width: 20px;
	}

	.bm-burger-bars:nth-of-type(3) {
		width: 10px;
	}
	@media (min-width: 728px) {
		display: none;
	}
`;

const Header = ({ siteTitle }) => (
	<Fade right duration={2000}>
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
	</Fade>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
