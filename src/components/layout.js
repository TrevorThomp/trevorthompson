import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { theme } from "../styles";
import { Header } from "./";
const { colors } = theme;

const StyledContent = styled.div`
	color: white;
	background-color: ${colors.black};
	background-image: linear-gradient(
		315deg,
		${colors.black} 5%,
		${colors.slateGray} 100%
	);
	min-height: 100vh;

	@media (max-width: 728px) {
		width: 100%;
	}
`;

import "./layout.css";

const Layout = ({ children }) => {
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
		<StyledContent>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div id="content">{children}</div>
		</StyledContent>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
