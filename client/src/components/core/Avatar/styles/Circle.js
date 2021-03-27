import { invert, transparentize } from 'polished';
import styled from 'styled-components';
import { zIndex, spacing, borderRadius, gradients, colours } from '../../../../styles';

export default styled.div`
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
	border: 1px solid ${({ status, accent }) => {
        return (!accent && !status)
            ? gradients.border
            : status 
            ? colours.status[status]
            : colours.accent[accent];
    }};
	padding: ${spacing[8]};
    ${zIndex('top')};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => transparentize(0.5,invert(theme.console))};
    svg {
        margin-top: -4px;
        width: 48px;
        height: 48px;
    }
`;
