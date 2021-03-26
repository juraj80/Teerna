import { transparentize } from "polished";
import styled from "styled-components";
import { colours, elevation, font, frostedGlass, spacing } from "../../../../styles";

export default styled.div`
    top: 40px;
    position: relative;
    ${frostedGlass(undefined, 'accent', 'purple')};
    padding: ${spacing[8]} ${spacing[16]};
    min-width: 50%;
    max-width: 52%;
    height: 140px;
    color: ${colours.grey[300]};
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
        color: ${colours.grey[300]};
        font-weight: bolder;
        ${elevation(21)};
    }
`;