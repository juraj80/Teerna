import { transparentize } from "polished";
import styled from "styled-components";
import { font, space } from "../../../shared";

export default styled.div`
    width: 100%;
    max-height: 80%;
    padding: calc(${space.large[300]} * 2) ${space.medium[100]};
    border: 3px solid ${({theme}) => transparentize(0.9, theme.border.zone )};
    background: ${({theme}) => theme.background.zone};
    color: ${({theme}) => theme.text.zone};
    font-weight: ${font.weight.bold};
    text-align: center;
`;