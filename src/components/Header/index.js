// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { Nav } from "../index";
import { navLinks } from "../../config";
import { Link, animateScroll as scroll } from "react-scroll";
import { theme } from "../../styles";
import { useScrollYPosition } from "react-use-scroll-position";
const { fontSizes, hamburgerStyles, secondColors, font } = theme;
import { slide as Menu } from "react-burger-menu";

const StyledHeader = styled.header`
	position: fixed;
	width: 100%;
	font-family: ${font.roboto};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
	height: 100px;
	z-index: 99;

	@media (max-width: 728px) {
		position: relative;
		padding: 20px;
	}
`;

const StyledLink = styled(Link)`
	font-size: ${fontSizes.h1};
	color: ${secondColors.teal};
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
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

const StyledScrolledHeader = styled.div`
	background: ${secondColors.blue};
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	transition: width 0.5s ease;
	z-index: -1;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

	@media (min-width: 728px) {
		width: ${(props) => (props.triggered ? "100%" : "0%")};
	}
`;

const Header = ({ siteTitle }) => {
	const scrollY = typeof window !== "undefined" ? useScrollYPosition() : 0,
		scrolled = scrollY !== 0;

	function scrollToTop() {
		scroll.scrollToTop();
	}
	return (
		<StyledHeader>
			<StyledScrolledHeader triggered={scrolled} />
			<Fade right duration={2000} style={{ zIndex: 99 }}>
				<div>
					<StyledLink onClick={scrollToTop}>{siteTitle}</StyledLink>
				</div>

				<Nav navLinks={navLinks} />
			</Fade>
			<StyledOuterContainer>
				<Fade right duration={2000} style={{ zIndex: 99 }}>
					<Menu disableCloseOnEsc styles={hamburgerStyles} right width={200}>
						{navLinks &&
							navLinks.map(({ name, url }, i) => (
								<Link
									className="menu-item"
									to={url}
									activeClass="active"
									to={url}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									{name}
								</Link>
							))}
					</Menu>
				</Fade>
			</StyledOuterContainer>
		</StyledHeader>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
