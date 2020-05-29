import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { colors } = theme;

const StyledNav = styled.nav`
	display: flex;
	counter-reset: item 0;
`;

const StyledList = styled.ol`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 0;
	list-style: none;
	width: 300px;
`;

const StyledListItem = styled.li`
	&:before {
		counter-increment: item 1;
		content: "0" counter(item) ".";
	}
`;

const Nav = () => {
	return (
		<StyledNav>
			<StyledList>
				<StyledListItem>Test</StyledListItem>
				<StyledListItem>Test</StyledListItem>
				<StyledListItem>Test</StyledListItem>
			</StyledList>
		</StyledNav>
	);
};

export default Nav;
