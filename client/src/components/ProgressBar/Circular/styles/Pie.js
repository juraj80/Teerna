import styled from "styled-components";
import { pieChart } from "../../../../shared";

export default styled.div`
    ${pieChart};
	position: relative;
	width: 120px;
	height: 120px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%) rotate(-90deg);
	svg circle {
		fill: transparent;
		stroke: ${({theme}) => theme.button.orange};
		stroke-width: 14;
		stroke-dasharray: 275;
		stroke-dashoffset: 235;
		animation: pieChart 3.8s linear forwards;
	}
`;