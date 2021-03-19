import { css } from 'styled-components';

// loading/spinner animation
export const spin = css`
    	@keyframes spin {
		from { transform: rotate(0); }
		to { transform: rotate(395deg); }
	}
`;

// pie-chart progress bar animation
export const circularProgressing = css`
	@keyframes circularProgressing {
		100% { stroke-dashoffset: 0; }
	}
`;

// linear progress bar animation
export const linearProgressing = css`
    @keyframes linearProgressing {
		0% {
			width: 5%;
			background-color: #a2b6f5;
		}
		100% { width: 35%; }
	}
`;