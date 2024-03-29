import { invert } from 'polished';
import styled, { css } from 'styled-components';
import { colours, elevation, spacing, font, borderRadius } from '../../../../styles';

export default styled.input`
  ${font(2, 'BODY', false)};
    padding: ${spacing[8]} ${spacing[16]};
    padding-left: ${({iconPositions}) => (iconPositions === 'both' || iconPositions === 'start') && spacing[48]};
    height: 32px;
    width: 100%;
    min-width: 200px;
    border-radius: ${({name}) => name === 'message' ? borderRadius.round : borderRadius.slight};
    border: none;
    color: ${({theme}) => invert(theme.input)};
    background: ${({theme}) => theme.input};
    transition: all 0.2s linear;
    ${elevation(4)};

    &:focus,
    &:active {
        border: 1px solid ${colours.accent.aqua};
        outline: 1px solid transparent;
        ${elevation(5)};

        &::placeholder {
            opacity: 0;
            transition: all 0.2s linear;
        }
    };

    &::placeholder {
        color: ${colours.grey[200]};
        opacity: 0.7;
        transition: all 0.2s linear;
    }

    ${({disabled}) => disabled && css`
        color: ${colours.status.disabled};
        background: ${colours.grey[100]};
        &:hover, &:focus  {
            background: ${colours.grey[100]};
            color: ${colours.status.disabled};
            border: none;
            outline: none;
            ${elevation(0)};
            &::placholder {
                opacity: 1;
                
            }
        }
    `};
`;