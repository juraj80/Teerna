import styled from 'styled-components';

export default styled.ul`
	position: absolute;
	padding: 0;
	top: 48px;
	right: 0;
	list-style-type: none;
	color: ${({ theme }) => theme.navbar.text};
	background: ${({ theme }) => theme.navbar.background};
`;