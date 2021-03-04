import { css } from 'styled-components';
import { colour } from '../../../shared';

export const blueFillStyles = css`
	background: ${colour.blue[100]};
	border: none;
	border-width: 2px;
	color: ${colour.white[100]};

	&:hover {
		background: ${colour.blue[145]};
	}
`;

export const blueOutlineStyles = css`
	background: ${colour.white[100]};
	border-color: ${colour.blue[100]};
	border-width: 2px;
	color: ${colour.blue[100]};

	&:hover {
		border-color: ${colour.blue[145]};
		color: ${colour.blue[145]};
	}
`;

export const blackFillStyles = css`
	background: ${colour.grey[225]};
	border: none;
	border-width: 2px;
	color: ${colour.white[100]};

	&:hover {
		background: ${colour.grey[300]};
	}
`;

export const blackOutlineStyles = css`
	background: ${colour.white[100]};
	border-color: ${colour.grey[225]};
	border-width: 2px;
	color: ${colour.grey[225]};

	&:hover {
		border-color: ${colour.grey[300]};
		color: ${colour.grey[300]};
	}
`;

export const whiteFillStyles = css`
	background: ${colour.white[100]};
	border: none;
	border-width: 2px;
	color: ${colour.grey[225]};

	&:hover {
		color: ${colour.grey[250]};
	}
`;

export const whiteOutlineStyles = css`
	background: ${colour.white[100]};
	border-color: ${colour.grey[225]};
	border-width: 2px;
	color: ${colour.grey[225]};

	&:hover {
		border-color: ${colour.grey[300]};
		color: ${colour.grey[300]};
	}
`;

export const disabledStyles = css`
	&,
	&:hover {
		background: ${colour.status.disabled};
		color: ${colour.black[110]};
		border: none;
		cursor: not-allowed;
	}
`;
