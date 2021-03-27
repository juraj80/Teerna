import styled from 'styled-components';
import { zIndex, spacing, borderRadius, gradients, colours } from '../../../../styles';

export default styled.img`
	width: ${({ size }) => {
        return !size 
            ? '56px'
            :  size === 'small' 
            ? '36px' 
            : size === 'large' 
            && '168px'}};
	height: ${({ size }) => {
        return !size 
            ? '56px'
            :  size === 'small' 
            ? '36px' 
            : size === 'large' 
            && '168px'}};
	border-radius: ${borderRadius.circular};
	object-fit: cover;
	object-position: left;
	border: 3px solid ${({ status, accent }) => {
        return (!accent && !status)
            ? gradients.border
            : status 
            ? colours.status[status]
            : colours.accent[accent];
    }};
	padding: ${spacing[8]};
    ${zIndex('top')};
`;
