import styled from 'styled-components';
import { order } from '../../../shared';

export default styled.input`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	opacity: 0;
	z-index: ${Number(order.navbarItems) + 2};
	cursor: pointer;

	&:checked + label {
		& span {
			color: ${({ theme }) => theme.background.console};
		}

		&:before {
			left: 108px;
		}

		&:after {
			color: ${({ theme }) => theme.text.button};
		}
	}
`;
