import React from "react";
import styled from "styled-components";
import { navLinks } from "../config";
import { theme } from "../styles";
import { Link } from "gatsby";
const { colors, fontSizes, borderRadius } = theme;

const StyledNav = styled.nav`
	display: flex;
	counter-reset: item 0;
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
	margin: 0 10px;

	&:before {
		counter-increment: item 1;
		content: "0" counter(item) ".";
		color: ${colors.lightGreen};
	}
`;

const StyledListLink = styled(Link)`
	color: ${colors.slateGray};
	padding: 10px;
	text-decoration: none;

	&:hover: {
		color: ${colors.lightGreen};
	}
`;

const StyledResumeButton = styled.button`
	padding: 5px 10px;
	border: 1px solid ${colors.lightGreen};
	font-size: ${fontSizes.sm};
	border-radius: ${borderRadius};
	background-color: transparent;
	transition: ${theme.transition};
	outline: none;

	&:hover {
		cursor: pointer;
		background-color: ${colors.fadedGreen};
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
