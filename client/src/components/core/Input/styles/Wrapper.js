import { lighten } from 'polished';
import styled, { css } from 'styled-components';
import {  gradients, spacing, colours, elevation } from '../../../../styles';


export default styled.div`
    max-width: 320px;
    max-height: 32px;
    position: relative;
    display: flex;
    align-items: center;

    margin: ${spacing[8]};
    padding: 0;
  
    ${({ iconPositions }) => iconPositions && ['start','both'].includes(iconPositions) && startIcon}
    ${({ iconPositions }) => iconPositions && ['end','both'].includes(iconPositions) && endIcon}

    & svg path {
        fill: ${colours.accent.aqua};
        ${elevation(3)};
    }
`;


const startIcon = css`
    svg.start {
        position: absolute;
        top: 0;
        left: ${spacing[8]};
        height: 32px;
        transition: all 0.2s linear;
    }
`;

const endIcon = css`
    svg.end {
        border-left: 1px solid ${gradients.border};
        background: ${({theme}) => lighten(0.05, theme.input)};
        position: absolute;
        top: 0;
        right: ${spacing[16]};
        height: 32px;
        transition: all 0.2s linear;
    }`;
