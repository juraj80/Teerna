import { transparentize } from 'polished';
import styled from 'styled-components';

export default styled.div`
	width: ${({ size }) => {
		if (size === 'small') return '360px';
		if (size === 'large') return '960px';
		return '600px';
	}};
	height: ${({ size }) => {
		if (size === 'small') return '200px';
		if (size === 'large') return '960px';
		return '600px';
	}};
	background: ${({ theme }) => theme.modal.background};
	background-position: left;
	border-radius: 14px;
	margin-bottom: 40px;
	box-shadow: 0 0 12px 18px
		${({ theme }) => transparentize(0.1, theme.app.background)};
	margin-top: ${({ state }) => {
		if (state === 'entered') return '0';
		return '-200vh';
	}};
	transition: 0.5s;
	z-index: 975;
`;
