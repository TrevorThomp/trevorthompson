import React from "react";
import styled from "styled-components";
import { navLinks } from "../config";
import { theme } from "../styles";
import { Link } from "gatsby";
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

const Nav = () => {
	return (
		<StyledNav>
			<StyledList>
				{navLinks &&
					navLinks.map(({ name, url }, i) => (
						<StyledListItem key={i}>
							<StyledListLink to={url}>{name}</StyledListLink>
						</StyledListItem>
					))}
			</StyledList>
			<StyledResumeButton>Resume</StyledResumeButton>
		</StyledNav>
	);
};

export default Nav;
