import { lighten } from 'polished';
import styled, { css } from 'styled-components';
import {  gradients, spacing, colours, elevation } from '../../../../styles';


export default styled.div`
    max-width: 200px;
    max-height: 48px;
    position: relative;
    display: flex;
    align-items: center;

    margin: 0;
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
        left: ${spacing[16]};
        height: 48px;
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
        height: 48px;
        transition: all 0.2s linear;
    }`;
