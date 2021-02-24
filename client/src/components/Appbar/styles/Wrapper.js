import styled from 'styled-components';

export default styled.div`
	width: ${({ barWidth }) => barWidth};
	border-bottom: 2px solid ${({ theme }) => theme.appbar.border};
	height: 48px;
	flex-shrink: 0;
`;
