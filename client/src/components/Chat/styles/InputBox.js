import styled from 'styled-components';
import { space } from '../../../shared';

export default styled.div`
	//chat-footer anim
	display: flex;
	align-items: center;
	position: sticky;
	left: 0;
	bottom: 0;
	width: calc(100% + 20px);
	padding-bottom: ${space.small[300]};
	background-color: ${({ theme }) => theme.background.chat};
`;
