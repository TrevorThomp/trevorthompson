import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { theme } from "../styles";
import { Header, Loader } from "./";
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

const Layout = ({ location, children }) => {
	const isHome = location.pathname === "/";
	const [isLoading, setIsLoading] = useState(isHome);

	useEffect(() => {
		if (isLoading) {
			return;
		}
		if (location.hash) {
			const id = location.hash.substring(1);
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
					el.focus();
				}
			}, 0);
		}
	}, [isLoading]);

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
			{isLoading && isHome ? (
				<Loader />
			) : (
				<StyledContent>
					<Header siteTitle={data.site.siteMetadata.title} />
					<div id="content">{children}</div>
				</StyledContent>
			)}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
