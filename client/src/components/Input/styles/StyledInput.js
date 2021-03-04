import styled from 'styled-components';
import { rgb, transparentize } from 'polished';
import { font, round, space } from '../../../shared';

export default styled.input`
	width: 100%;
	height: 100%;
	border: none;
	background-color: ${({ theme }) => theme.input.background};
	border-radius: ${round.minimal};
	font-family: ${font.family.body};
	font-size: ${font.size.medium[100]};
	font-weight: ${font.weight.regular};
	padding: 0 ${space.medium[200]} 0 ${space.large[200]};
	box-shadow: 0 0 0 2px ${transparentize(0.98, rgb(134, 140, 160))};

	&::placeholder {
		font-family: ${font.family.body};
		color: ${({ theme }) => theme.input.disabled};
		font-size: ${font.size.medium[100]};
		font-weight: ${font.weight.regular};
		padding-left: ${space.medium[100]};
	}

	&:focus,
	&:hover {
		box-shadow: 0 0 0 2px ${transparentize(0.94, rgb(134, 140, 160))};
		color: ${({ theme }) => theme.input.text};
		outline: none;
	}
`;
