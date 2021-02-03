import styled from 'styled-components';
import { transparentize } from 'polished';
import { typography } from '../../../styles';

export default styled.div`
	width: 100%;
	height: ${({ size }) => {
		if (size === 'small') return '40px';
		return '56px';
	}};
	font-size: ${({ size }) => {
		if (size === 'small') return '32px';
		return '48px';
	}};
	font-weight: ${({ size }) => {
		if (size === 'small') return typography.weight.body.extrabold;
		return typography.weight.body.bold;
	}};
	border-radius: 14px 14px 0 0;
	line-height: 40px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding: 0 0 8px 24px;
	background: ${({ theme }) => transparentize(0.1, theme.app.background)};
`;
