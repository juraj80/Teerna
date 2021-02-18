import styled, { css } from 'styled-components';

export default styled.div`
	width: ${({ isFull }) => (isFull ? '100%' : 'calc(100% - 240px)')};
	border-bottom: 2px solid ${({ theme }) => theme.appbar.border};
	height: 48px;
	flex-shrink: 0;
	${({ chatOpen }) =>
		chatOpen &&
		css`
			width: calc(100% - 540px);
		`};
`;
