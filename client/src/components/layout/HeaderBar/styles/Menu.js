import styled from 'styled-components';
import { darken, invert } from 'polished';
import { spacing } from '../../../../styles';

export default styled.ul`
	min-width: 160px;
	position: absolute;
	padding: 0;
	top: 44px;
	right: 0;
	list-style-type: none;
	color: ${({ theme }) => invert(theme.console)};
	background: ${({ theme }) => darken(0.05,theme.console)};
`;
