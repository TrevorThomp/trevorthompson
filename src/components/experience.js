import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
import { theme } from "../styles";
import { Link, animateScroll as scroll } from "react-scroll";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;

const StyledExperienceWrapper = styled.div`
	height: 90vh;
`;

// const ExpWrapper = styled.div`
//   margin-bottom: 10rem;
//   section {
//     flex-direction: column;
//     width: 1020px;
//     max-width: 100%;
//     h2 {
//       color: ${(props) => props.theme.colors.red};
//       margin-bottom: 2rem;
//     }
//     .module {
//       display: flex;
//       min-height: 31.5rem;
//       .left {
//         position: relative;
//         width: 22rem;
//         padding-left: 0.2rem;
//         flex-shrink: 0;
//         &:before {
//           transition: all 0.2s ease;
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0.2rem;
//           height: 100%;
//           // background: ${(props) => props.theme.gradients.redVert};
//           z-index: 100;
//         }
//       }
//       .right {
//         padding-left: 3.5rem;
//       }
//       // @media screen and (max-width: ${(props) => props.theme.sizes.mobile}) {
//       //   .right {
//       //     display: none;
//       //   }
//       //   .left {
//       //     width: 100%;
//       //   }
//       // }
//     }
//   }
// `;

const StyledTitle = styled.h2`
	color: ${secondColors.teal};
	font-family: ${font.exo2};

	&:after {
		content: "";
		display: block;
		height: 1px;
		width: 300px;
		background-color: ${secondColors.greenTeal};
		position: relative;
		top: -15px;
		margin-left: 175px;

		@media (max-width: 728px) {
			top: -12px;
			width: 170px;
			margin-left: 150px;
		}
	}
`;

const Experience = ({ data }) => {
	console.log(data);
	const { title, paragraphOne, paragraphTwo } = data[0].node.frontmatter;
	const revealContainer = useRef(null);
	useEffect(() => scrollReveal.reveal(revealContainer.current, srConfig()), []);

	// const renderDetailBlocks = () => {
	// 	return blocks.map((block, idx) => {
	// 		let { detailsNode, position, timeframe } = block;
	// 		return (
	// 			<DetailBlockWrapper selected={index === idx} key={idx}>
	// 				<div className="position">
	// 					<span>{position}</span>
	// 				</div>
	// 				<div className="timeframe">
	// 					<span>{timeframe}</span>
	// 				</div>
	// 				<div
	// 					className="details"
	// 					dangerouslySetInnerHTML={{
	// 						__html: detailsNode.childMarkdownRemark.html,
	// 					}}
	// 				/>
	// 			</DetailBlockWrapper>
	// 		);
	// 	});
	// };

	return (
		<StyledExperienceWrapper id="experience" ref={revealContainer}>
			<StyledTitle>{title}</StyledTitle>
			{/* <div className="right">Testing</div> */}
		</StyledExperienceWrapper>
	);
};

export default Experience;
