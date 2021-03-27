import { transparentize } from "polished";
import styled from "styled-components";
import { borderRadius, colours, elevation, font, spacing } from "../../../../styles";

export default styled.div`
    top: 50px;
    position: relative;
    ${font(4, 'BODY', true)};
    text-align: center;
    padding: ${spacing[16]} ${spacing[32]};
    min-height: 50%;
    min-width: 480px;
    max-width: 800px;
    ${elevation(18)};
    color: ${({theme}) => theme.mode === 'light' ? colours.grey[300] : transparentize(0.35,colours.white)};
    border-radius: ${borderRadius.slight};
    & h1 {
        ${font(5, 'DISPLAY', false)};
    }
`;