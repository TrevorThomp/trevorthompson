import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs/lib/anime.es.js";
import { theme } from "../styles";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	background-color: ${colors.slateGray};
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
`;

const Loader = ({ finishLoading }) => {
	const animate = () => {
		const text = document.querySelector(".loader");
		text.innerHTML = text.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);
		const loader = anime
			.timeline({
				loop: true,
				complete: () => finishLoading(),
			})
			.add({
				targets: ".loader .letter",
				opacity: [0, 1],
				easing: "easeInOutQuad",
				duration: 2250,
				delay: (el, i) => 150 * (i + 1),
			})
			.add({
				targets: ".loader",
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});
	};

	useEffect(() => {
		animate();
	}, []);

	return (
		<StyledContainer>
			<h1 className="loader">Welcome.</h1>
		</StyledContainer>
	);
};

export default Loader;
