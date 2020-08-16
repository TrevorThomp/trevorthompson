import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { srConfig } from "../config";
import { scrollReveal } from "../utils";
import { theme } from "../styles";
const { secondColors, font } = theme;

const ExpWrapper = styled.div`
  margin-bottom: 10rem;
  section {
    flex-direction: column;
    width: 1020px;
    max-width: 100%;
    h2 {
      color: ${secondColors.teal}
      margin-bottom: 2rem;
    }
    .module {
      display: flex;
      min-height: 31.5rem;
      .left {
        position: relative;
        width: 22rem;
        padding-left: 0.2rem;
        flex-shrink: 0;
        height: 100%;
        &:before {
          transition: all 0.2s ease;
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0.2rem;
          height: 100%;
          z-index: 100;
          background: ${secondColors.teal};
        }
      }
      .right {
        padding-left: 3.5rem;
      }
      @media (max-width: 728px) {
        .right {
          display: none;
        }
        .left {
          width: 100%;
        }
      }
    }
  }
`;

const DetailBlockWrapper = styled.div`
	transition: opacity 0.2s ease;
	position: relative;
	display: ${(props) => (props.selected ? "flex" : "none")};
	flex-direction: column;
	.position {
		font-weight: bold;
		margin-bottom: 1rem;
	}
	.timeframe {
		font-style: italic;
		margin-bottom: 1rem;
	}
	.details {
		ul {
			margin-top: 1rem;
			list-style: none;
			li {
				margin-bottom: 1rem;
				position: relative;
				&:last-child {
					margin-bottom: 0;
				}
				&:before {
					content: "";
					position: absolute;
					height: 8px;
					width: 2px;
					background: ${secondColors.teal};
					top: 0.85rem;
					left: -1.5rem;
					z-index: 5;
				}
				&:after {
					content: "";
					position: absolute;
					height: 8px;
					width: 2px;
					background: ${secondColors.teal};
					top: 0.85rem;
					left: -1.5rem;
					z-index: 5;
					transform: rotate(90deg);
				}
			}
		}
	}
`;

const TitleBlockWrapper = styled.div`
	// background: white;
	padding-left: 1.5rem;
	padding: 3rem 0 3rem 1.5rem;
	display: flex;
	align-items: center;
	transition: all 0.2s ease;
	cursor: pointer;
	position: relative;
	flex-wrap: wrap;
	&:after {
		transition: all 0.2s ease;
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: ${(props) => (props.selected ? "100%" : "0%")};
		height: 0.2rem;
		background: ${secondColors.teal};
		z-index: 100;
	}
	span,
	.title {
		transition: all 0.2s ease;
		text-transform: uppercase;
		pointer-events: none;
		color: ${secondColors.teal};
		font-weight: ${(props) => (props.selected ? "500" : "normal")};
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
`;

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

const Arrow = styled.div`
	height: 15px;
	width: 15px;
	position: relative;
	margin-right: 15px;
	&:before {
		transition: all 0.2s ease;
		content: "";
		position: absolute;
		bottom: 0;
		left: -5px;
		width: 0.15rem;
		height: 100%;
		background: ${secondColors.teal};
		z-index: 100;
		transform: rotate(${(props) => (props.selected ? "45deg" : "-45deg")});
	}
	&:after {
		transition: all 0.2s ease;
		content: "";
		position: absolute;
		bottom: 0;
		left: 5px;
		width: 0.15rem;
		height: 100%;
		background: ${secondColors.teal};
		z-index: 100;
		transform: rotate(${(props) => (props.selected ? "-45deg" : "45deg")});
	}
	@media (min-width: 728px) {
		display: none;
	}
`;

const TitleDetailBlockWrapper = styled.div`
	flex-direction: column;
	.wrap {
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease;
		max-height: ${(props) => (props.selected ? "800px" : "0")};
		span {
			color: ${secondColors.slateWhite};
			text-transform: none;
		}
	}
	.position-sm {
		font-weight: bold;
		margin-bottom: 1rem;
		margin-top: 3rem;
	}
	.timeframe-sm {
		font-style: italic;
		margin-bottom: 1rem;
	}
	.details {
		padding-left: 6px;
		margin-bottom: 3rem;
		ul {
			list-style: none;
			margin-top: 1rem;
			li {
				margin-bottom: 1rem;
				position: relative;
				&:last-child {
					margin-bottom: 0;
				}
				&:before {
					content: "";
					position: absolute;
					height: 8px;
					width: 2px;
					background: ${secondColors.teal};
					top: 0.85rem;
					left: -1.5rem;
					z-index: 5;
				}
				&:after {
					content: "";
					position: absolute;
					height: 8px;
					width: 2px;
					background: ${secondColors.teal};
					top: 0.85rem;
					left: -1.5rem;
					z-index: 5;
					transform: rotate(90deg);
				}
			}
		}
	}
	@media (min-width: 728px) {
		display: none;
	}
`;

const Experience = ({ data }) => {
	const [index, setIndex] = useState(0);
	const revealContainer = useRef(null);
	useEffect(() => scrollReveal.reveal(revealContainer.current, srConfig()), []);

	const handleLeftClick = (idx) => {
		let val = index === parseInt(idx) ? null : parseInt(idx);
		setIndex(val);
	};

	const renderLeftBlocks = () => {
		return data.map(({ node }, idx) => {
			let { company, title, date, descriptionOne } = node.frontmatter;
			console.log(descriptionOne);
			return (
				<TitleBlockWrapper
					selected={index === idx}
					key={idx}
					onClick={() => handleLeftClick(idx)}
				>
					<div className="title">
						<span>{company}</span>
						<Arrow selected={index === idx} />
					</div>

					<TitleDetailBlockWrapper selected={index === idx}>
						<div className="wrap">
							<div className="position-sm">
								<span>{title}</span>
							</div>
							<div className="timeframe-sm">
								<span>{date}</span>
							</div>
							<div className="details">
								{/* <span>{description}</span> */}
								<ul>
									{descriptionOne.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					</TitleDetailBlockWrapper>
				</TitleBlockWrapper>
			);
		});
	};

	const renderDetailBlocks = () => {
		return data.map(({ node }, idx) => {
			let { company, date, descriptionOne, title } = node.frontmatter;
			return (
				<DetailBlockWrapper selected={index === idx} key={idx}>
					<div className="position">
						<span>{title}</span>
					</div>
					<div className="timeframe">
						<span>{date}</span>
					</div>

					<div className="details ">
						<ul>
							{descriptionOne.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
				</DetailBlockWrapper>
			);
		});
	};

	return (
		<ExpWrapper id="experience" ref={revealContainer}>
			<section>
				<StyledTitle>Experience</StyledTitle>
				<div className="module">
					<div className="left">{renderLeftBlocks()}</div>
					<div className="right">{renderDetailBlocks()}</div>
				</div>
			</section>
		</ExpWrapper>
	);
};

Experience.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Experience;
