import styled, { css } from 'styled-components';
import { font, space } from '../../../shared';

const activeStyles = css`
	color: ${({ theme }) => theme.appbar.hover.text};
	border-bottom: 3px solid ${({ theme }) => theme.appbar.hover.border};
`;

export default styled.div`
	cursor: pointer;
	padding: calc(${space.medium[100]} - 3px) ${space.large[100]};
	color: ${({ theme }) => theme.appbar.text};
	font-weight: ${font.weight.bold};
	border-bottom: 2px solid transparent;
	transition: 0.3s;

	${({ active }) => active && activeStyles};

	&:hover {
		${activeStyles};
	}
`;
