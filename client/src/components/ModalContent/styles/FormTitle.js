import styled from 'styled-components';

export default styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.modal.text};
	margin-top: 0;
`;
