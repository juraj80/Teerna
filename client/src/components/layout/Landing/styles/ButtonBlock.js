import { transparentize } from "polished";
import styled from "styled-components";
import { borderRadius, colours, elevation, font, frostedGlass, spacing } from "../../../../styles";

export default styled.div`
    top: 40px;
    position: relative;
    border-radius: ${borderRadius.slight};
    ${({ theme }) => frostedGlass(undefined, 'accent', 'purple', theme.mode === 'dark')};
    padding: ${spacing[8]} ${spacing[16]};
    min-width: 50%;
    max-width: 52%;
    height: 140px;
    color: ${({theme}) => theme.mode === 'light' ? colours.grey[300] : transparentize(0.35,colours.white)};
    cursor: pointer;
    ${elevation(18)};

    & h1 {
        position: relative;
        ${font(3, 'TITLE', false)};
        margin-bottom: ${spacing[8]};
    }

    & p {
        position: relative;
        ${font(2, 'BODY', true)};
    }
    
    &:hover {
        background: ${transparentize(0.3, colours.accent.purple)};
        font-weight: bolder;
        ${elevation(21)};
    }
`;