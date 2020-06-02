import { css } from "styled-components";

import KaushanScriptRegular from "../fonts/KaushanScriptRegular.ttf";
import DancingScript from "../fonts/DancingScript.ttf";
import Exo2t from "../fonts/Exo2t.ttf";
import Exo2Italic from "../fonts/Exo2Italic.ttf";

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

	@font-face {
		font-family: "Exo2";
		src: url(${Exo2t}) format("truetype");
		font-weight: 700;
		font-style: bold;
	}

	@font-face {
		font-family: "Exo2 Italic";
		src: url(${Exo2Italic}) format("truetype");
		font-weight: 700;
		font-style: bold;
	}
`;

export default FontFaces;
