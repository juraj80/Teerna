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

// dark/light mode toggle - ON
export const toggleOn = css`
	@keyframes toggleOn {
		0% {
			height: 10px;
			width: 10px;
			border-width: 5px;
		}
		25%,
		55%,
		85% {
			height: 15px;
			width: 2.5px;
			border-width: 2.5px;
		}

		40%,
		70%,
		100% {
			height: 15px;
			width: 0;
			border-width: 2.5px;
		}
	}
`;

// dark/light mode toggle - OFF
export const toggleOff = css`
	@keyframes toggleOff {
		0% {
			height: 15px;
			width: 0;
			border-width: 2.5px;
		}
		55% {
			height: 6.5px;
			width: 13.5px;
			border-width: 5px;
		}

		70% {
			height: 10px;
			width: 10px;
			border-width: 5px;
		}

		85% {
			height: 7.5px;
			width: 12.5px;
			border-width: 5px;
		}

		100% {
			height: 10px;
			width: 10px;
			border-width: 5px;
		}
	}
`;
