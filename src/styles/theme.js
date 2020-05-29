import { hex2rgba } from "../utils";

const theme = {
	colors: {
		darkGreen: "#61892F",
		lightGreen: "#86C232",
		fadedGreen: hex2rgba("#86C232", 0.4),
		black: "#222629",
		slateGray: "#474B4F",
		lightGray: "#6B6E70",
	},

	fonts: {},

	fontSizes: {
		xs: "12px",
		smish: "13px",
		sm: "14px",
		md: "16px",
		lg: "18px",
		xl: "20px",
		xxl: "22px",
		h1: "32px",
	},

	borderRadius: "3px",
	transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
};

export default theme;
