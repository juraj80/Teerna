import { transparentize } from 'polished';
import styled from 'styled-components';
import { colour } from '../../../shared';

export default styled.div`
	width: 30%;
	max-width: 30%;
	display: flex;
	flex-direction: column;
	background: ${({ theme }) =>
		theme.mode === 'light'
			? transparentize(0.95, colour.white[110])
			: transparentize(0.8, colour.black[100])};
	border-left: 1px solid ${({ theme }) => theme.sidebar.border};
`;
