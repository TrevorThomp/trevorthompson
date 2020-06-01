import { css } from "styled-components";

import KaushanScriptRegular from "../fonts/KaushanScriptRegular.ttf";
import DancingScript from "../fonts/DancingScript.ttf";

const FontFaces = css`
	@font-face {
		font-family: "Kaushan";
		src: url(${KaushanScriptRegular}) format("truetype");
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: "Dancing Script";
		src: url(${DancingScript}) format("truetype");
		font-weight: 300;
		font-style: normal;
	}
`;

export default FontFaces;
