import styled from 'styled-components';

export default styled.div`
	position: fixed;
	background: ${({ state, theme }) => {
		if (state === 'entered') return theme.background.portal;
		return 'transparent';
	}};
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	z-index: 950;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s ease;
	pointer-events: auto;
`;
