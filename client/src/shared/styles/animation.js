import { css } from 'styled-components';

export const roll = css`
	@keyframes roll {
		from {
			transform: rotateX(0);
		}
		100% {
			transform: rotateX(calc(360deg * 5));
		}
	}
`;

export const loading = css`
	@keyframes loading {
		0% {
			top: 40px;
			left: 40px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: -1px;
			left: -1px;
			width: 80px;
			height: 80px;
			opacity: 0;
		}
	}
`;

// loading spinner
export const spin = css`
	@keyframes spin {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(395deg);
		}
	}
`;

export const pieChart = css`
	@keyframes pieChart {
		100% {
			stroke-dashoffset: 0;
		}
	}
`;

export const progressAnimation = css`
	@keyframes progressAnimation {
		0% {
			width: 5%;
			background-color: #a2b6f5;
		}
		100% {
			width: 35%;
		}
	}
`;
