import styled from 'styled-components';
import { opacify, invert } from 'polished';
import { spacing, zIndex } from '../../../../styles';

export default styled.ul`
	min-width: 160px;
	position: absolute;
	padding: 0;
	top: 44px;
	right: 0;
	list-style-type: none;
	color: ${({ theme }) => invert(theme.console)};
	background: ${({ theme }) => opacify(0.5,theme.console)};
	${zIndex('above')};
`;
