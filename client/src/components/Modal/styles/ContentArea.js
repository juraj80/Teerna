import styled from 'styled-components';
import { transparentize } from 'polished';

export default styled.div`
	display: flex;
	flex-direction: column;

	background: ${({ theme }) => transparentize(0.3, theme.app.background)};
	border-radius: 14px;
	width: 100%;
	height: 100%;
	position: relative;
`;
