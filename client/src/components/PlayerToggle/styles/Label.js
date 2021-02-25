import styled from 'styled-components';
import { font, order, round, space } from '../../../shared';

export default styled.label`
	&:before,
	&:after,
	& span {
		position: absolute;
		top: ${space.small[100]};
		width: 100px;
		height: 10px;
		font-size: ${font.size.small[300]};
		font-weight: ${font.weight.bold};
		text-align: center;
		line-height: 1;
		padding: ${space.small[200]} ${space.small[100]};
		border-radius: ${round.curved};
		transition: 0.3s ease all;
	}

	&:before {
		content: '';
		left: ${space.small[100]};
		background: ${({ theme }) => theme.background.button};
	}
    
	&:after {
		content: 'Master';
		right: ${space.small[100]};
		color: ${({ theme }) => theme.background.console};
	}

	& span {
		color: ${({ theme }) => theme.text.button};
		z-index: ${Number(order.navbarItems) + 1};
		left: ${space.small[200]};
	}
`;
