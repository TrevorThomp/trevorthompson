// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { Nav } from "../index";
import { navLinks } from "../../config";
import { Link, animateScroll as scroll } from "react-scroll";
import { theme } from "../../styles";
import Headroom from "react-headroom";
const { fontSizes, hamburgerStyles, secondColors, borderRadius } = theme;
import { slide as Menu } from "react-burger-menu";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 20px 40px;
	height: 100px;
	z-index: 95;

	@media (max-width: 728px) {
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

const Header = ({ siteTitle }) => {
	function scrollToTop() {
		scroll.scrollToTop();
	}
	return (
		<Fade right duration={2000}>
			<Headroom>
				<StyledHeader>
					<div>
						<StyledLink onClick={scrollToTop}>{siteTitle}</StyledLink>
					</div>
					<Nav navLinks={navLinks} />
					<StyledOuterContainer>
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
							{/* <a className="menu-item" href="/">
						Home
					</a>
					<a className="menu-item" href="/about">
						About
					</a>
					<a className="menu-item" href="/contact">
						Experience
					</a>
					<a className="menu-item--small" href="">
						Work
					</a>
					<a className="menu-item--small" href="">
						Contact
					</a> */}
						</Menu>
					</StyledOuterContainer>
				</StyledHeader>
			</Headroom>
		</Fade>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
