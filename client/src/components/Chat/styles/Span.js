import styled, { css } from 'styled-components';
import { font } from '../../../shared';

export default styled.span`
	//svg

	${({ author, time, msg }) => {
		return author
			? css`
					font-size: ${font.size.small[200]};
			  `
			: time
			? css`
					font-size: ${font.size.small[100]};
			  `
			: msg &&
			  css`
					line-height: 1.4;
					max-width: 80%;
					display: -webkit-box;
					overflow: hidden;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
			  `;
	}}
`;
