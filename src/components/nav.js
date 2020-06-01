import React from "react";
import styled from "styled-components";
import { navLinks } from "../config";
import { theme } from "../styles";
import { Link } from "react-scroll";
import scrollToElement from "scroll-to-element";
// import { Link } from "gatsby";
// import scrollTo from "gatsby-plugin-smoothscroll";
// import { AnchorLink } from "gatsby-plugin-anchor-links";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;

const StyledNav = styled.nav`
	display: flex;

	@media (max-width: 728px) {
		display: none;
	}
`;

const StyledList = styled.ol`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	list-style: none;
	font-size: ${fontSizes.sm};
`;

const StyledListItem = styled.li`
	color: ${secondColors.slateWhite};
	margin: 0 10px;
`;

const StyledListLink = styled(Link)`
	color: #d3d3d3;
	padding: 10px;
	text-decoration: none;
	transition: ${theme.transition};

	&:hover {
		cursor: pointer;
		color: ${secondColors.teal};
	}
`;

const StyledResumeButton = styled.button`
	color: #d3d3d3;
	padding: 5px 10px;
	border: 1px solid ${secondColors.teal};
	font-size: ${fontSizes.sm};
	border-radius: ${borderRadius};
	background-color: transparent;
	transition: ${theme.transition};
	outline: none;

	&:hover {
		cursor: pointer;
		background-color: ${secondColors.greenTeal};
	}

	&:after {
		display: none !important;
	}
`;

const Nav = ({}) => {
	function scroller(target, offset) {
		console.log(target);
		scrollToElement(target, {
			offset,
			ease: "out-quad",
			align: "top",
			duration: 5000,
		});
	}

	return (
		<StyledNav>
			<StyledList>
				{navLinks &&
					navLinks.map(({ name, url }, i) => (
						<StyledListItem key={i}>
							<StyledListLink to={url}>{name}</StyledListLink>
						</StyledListItem>
					))}
				<StyledResumeButton>Resume</StyledResumeButton>
			</StyledList>
		</StyledNav>
	);
};

export default Nav;
