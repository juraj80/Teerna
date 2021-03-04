import styled from 'styled-components';
import { transparentize } from 'polished';
import { space, round } from '../../../shared';

export default styled.div`
	background: ${({ type, theme }) => theme.status[type]};
	padding: ${space.large[200]} ${space.large[100]};
	max-width: 480px;
	border-radius: ${round.minimal};
	box-shadow: 2px 2px 8px 2px
		${({ theme }) => transparentize(0.5, theme.console.background)};
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.alert.text};
	position: relative;
	margin-bottom: ${space.medium[200]};
`;
