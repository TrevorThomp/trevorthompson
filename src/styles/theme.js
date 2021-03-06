import { hex2rgba } from "../utils";

const theme = {
	colors: {
		darkGreen: "#61892F",
		lightGreen: "#86C232",
		fadedGreen: hex2rgba("#86C232", 0.4),
		black: "#000000",
		slateGray: "#414345",
		lightGray: "#222629",
	},

	secondColors: {
		teal: "#66FCF1",
		greenTeal: "#45A29E",
		fadedTeal: "#A7E2E0",
		slateWhite: "#C5C6C7",
		smokyBlack: "#0B0C10",
		blue: "#1F2833",
	},

	font: {
		roboto: `'Roboto Mono', monospace`,
		exo2: `'Exo 2', sans-serif`,
	},

	fontSizes: {
		xs: "12px",
		smish: "13px",
		sm: "14px",
		md: "16px",
		lg: "18px",
		xl: "20px",
		xxl: "22px",
		h1: "32px",
		smTitle: "60px",
		title: "80px",
	},

	hamburgerStyles: {
		bmBurgerButton: {
			position: "relative",
			width: "30px",
			height: "25px",
		},
		bmBurgerBars: {
			background: "#66FCF1",
		},
		bmBurgerBarsHover: {
			background: "#a90000",
		},
		bmCrossButton: {
			height: "24px",
			width: "24px",
			top: "15px",
			right: "15px",
		},
		bmCross: {
			background: "#66FCF1",
			height: "20px",
		},
		bmMenuWrap: {
			position: "fixed",
			top: "0",
			height: "100%",
		},
		bmMenu: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			background: "#1F2833",
			padding: "1.5em 1.5em 0",
			fontSize: "1.15em",
			zIndex: "99",
			borderRadius: "5px",
		},
		bmMorphShape: {
			fill: "#1F2833",
		},
		bmItemList: {
			display: "flex",
			flexDirection: "column",
			color: "red",
			padding: "0.8em",
			paddingLeft: "2em",
			marginTop: "100px",
		},
		bmItem: {
			color: "#66FCF1",
			display: "inline-block",
			textDecoration: "none",
			outline: "none",
			marginBottom: "40px",
		},
		bmOverlay: {
			background: "transparent",
		},
	},

	borderRadius: "3px",
	transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
};

export default theme;
