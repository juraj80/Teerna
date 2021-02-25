import styled from 'styled-components';
import { font, space } from '../../../shared';

export default styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	font-size: ${font.size.medium[100]};
	font-weight: ${font.weight.bold};
	padding: 0 ${space.medium[200]};
	height: 100%;

	input {
		width: 100%;
		height: 100%;
		display: block;
		background-color: transparent;
		border: none;
	}

	svg {
		margin-right: ${space.medium[200]};
		width: 18px;
		color: ${({ theme }) => theme.button.blue};
		flex-shrink: 0;
	}
`;
