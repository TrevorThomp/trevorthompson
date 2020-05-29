import React from "react";
import styled from "styled-components";
import { navLinks } from "../config";
import { theme } from "../styles";
import { Link } from "gatsby";
const { colors, fontSizes } = theme;

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
	width: 300px;
	font-size: ${fontSizes.md};
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
	padding: 10px;
	text-decoration: none;
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
		</StyledNav>
	);
};

export default Nav;
