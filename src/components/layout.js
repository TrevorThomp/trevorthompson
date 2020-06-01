import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { theme } from "../styles";
import { Header } from "./";
const { colors, secondColors } = theme;

const StyledContent = styled.div`
	color: white;
	background-color: ${secondColors.blue};
	background-image: linear-gradient(
		315deg,
		${secondColors.smokyBlack} 5%,
		${secondColors.blue} 100%
	);
	min-height: 100vh;

	@media (max-width: 728px) {
		width: 100%;
	}
`;

import "./layout.css";

const Layout = ({ location, children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div>
			<StyledContent>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div id="content">{children}</div>
			</StyledContent>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
