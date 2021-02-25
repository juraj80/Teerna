import styled from 'styled-components';
import { colour, round, space } from '../../../shared';

export default styled.div`
	color: ${({ status }) => {
		return status === 'loading' ? '#3e4ec2' : colour.status[status];
	}};
	display: inline-flex;
	align-items: center;
	svg {
		margin-right: ${space.small[200]};
		width: 22px;
		height: 22px;
		padding: ${space.small[100]};
		border-radius: ${round.square};
		background: ${({ status }) => {
			return status === 'loading' || status === 'info'
				? '#1a214d'
				: status === 'success'
				? '#1aa385'
				: status === 'error'
				? '#d14b69'
				: status === 'disabled' && colour.grey[40];
		}};
		color: currentColor;
	}
`;
