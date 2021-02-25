import styled from 'styled-components';
import { lighten, transparentize } from 'polished';
import { space, round } from '../../../shared';

export default styled.div`
	background: ${({ type, theme }) => lighten(0.32,theme.status[type])};
	padding: ${space.large[200]} ${space.large[100]};
	max-width: 540px;
	border-radius: ${round.minimal};
	box-shadow: 2px 2px 8px 2px
		${({ theme }) => transparentize(0.5, theme.background.console)};
	display: flex;
	align-items: center;
	color: ${({ theme, status }) => theme.status[status]};
	position: relative;
	margin-bottom: ${space.medium[200]};
`;
