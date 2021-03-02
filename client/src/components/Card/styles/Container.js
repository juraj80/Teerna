import styled from 'styled-components';
import { font, round, space } from '../../../shared';

export default styled.div`
	display: flex;
	flex-direction: column;
	width: ${({ width }) => {
		return !width ? 'fit-content' : `${width}px`;
	}};
	font-size: ${font.size.medium[100]};
	background: ${({ theme, status, colour }) => {
		return !status && !colour
			? theme.background.card
			: status
			? theme.status[status]
			: colour && theme.card[colour];
	}};
	border-radius: ${round.regular};
	border: 1px solid ${({ theme }) => theme.background.console};
	padding: ${space.medium[200]};
`;
