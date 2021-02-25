import styled from 'styled-components';
import { order, round, space } from '../../../shared';

export default styled.img`
	width: ${({ size }) => {
        return !size 
            ? '64px'
            :  size === 'small' 
            ? '44px' 
            : size === 'large' 
            && '88px'}};
	height: ${({ size }) => {
        return !size 
            ? '64px'
            :  size === 'small' 
            ? '44px' 
            : size === 'large' 
            && '88px'}};
	border-radius: ${round.circular};
	object-fit: cover;
	object-position: left;
	border: 3px solid ${({colour, theme}) => {
        return !colour 
            ? theme.background.button
            : theme.button[colour];
    }};
	padding: ${space.small[100]};
    z-index: ${order.navbarItems};
`;
