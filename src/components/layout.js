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

	.headroom--pinned {
		position: relative;
		z-index: 2;
		box-shadow: 0px 15px 10px -15px #111;
		background-color: rgb(31, 40, 51);
		background-image: linear-gradient(
			315deg,
			rgb(11, 12, 16) 5%,
			rgb(31, 40, 51) 100%
		);
	}

	@media (max-width: 728px) {
		width: 100%;

		.headroom {
			z-index: -1;
		}
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
