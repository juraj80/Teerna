import styled from 'styled-components';
import { progressAnimation, round } from '../../../../shared';

export default styled.div`
	${progressAnimation};
	background-color: ${({theme}) => theme.button.purple};
	border-radius: ${round.square};
	width: 35%;
	height: 100%;
	animation: progressAnimation 6s;
	transition: 0.3s linear both;
	transition-property: width, background-color;
`;
