import { transparentize } from "polished";
import styled from "styled-components";
import { colours, elevation, font, frostedGlass, spacing } from "../../../../styles";

export default styled.div`
    position: relative;
    top: 0;
    ${({theme}) => frostedGlass(undefined, 'accent', 'purple', theme.mode === 'dark' ? true : false)};
    padding: ${spacing[16]} ${spacing[32]};
    min-width: 100%;
    max-width: 100%;
    min-height: 45%;
    max-height: 360px;
    color: ${({theme}) => theme.mode === 'light' ? colours.grey[300] : colours.white};
    cursor: pointer;
    ${elevation(18)};

    & h1 {
        position: relative;
        ${font(3, 'TITLE', false)};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    
    &:hover {
        background: ${transparentize(0.15, colours.accent.purple)};
        font-weight: bolder;
        ${elevation(21)};
    }

`;