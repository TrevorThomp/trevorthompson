// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export const hex2rgba = (hex, alpha = 1) => {
	const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
};

export { default as scrollReveal } from "./sr";
