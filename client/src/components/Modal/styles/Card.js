import styled from 'styled-components';
import { font, order, round, space } from '../../../shared';

export default styled.div`
    max-width: 600px;
	width: 400px;
    min-height: 120px;
    height: fit-content;
	font-size: ${font.size.medium[100]};
	background-color: ${({theme}) => theme.background.modal};
	border-radius: ${round.regular};
	border: 1px solid ${({theme}) => theme.background.modal};
	padding: ${space.medium[200]};
	cursor: pointer;
    transition: all 0.5s ease;
    z-index: ${order.modal - 1};

	/* svg {
		width: 28px;
		border-radius: 6px;
		margin-right: 12px;
		flex-shrink: 0;
	}

	& + & {
		margin-left: 20px;
	} */
`;
