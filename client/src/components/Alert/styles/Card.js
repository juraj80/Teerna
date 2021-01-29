import styled from 'styled-components';

export default styled.div`
	background: ${({ theme, type }) => theme.background.status[type]};
	height: 96px;
	width: 320px;
	box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	color: white;
	position: relative;
	margin-bottom: 20px;
`;
