import styled from "styled-components";
import { colours, font, spacing } from "../../../../../styles";

export default styled.h1`
    ${font(3, 'DISPLAY', false)};
    color: ${({theme}) => theme.bartext};
    text-align: center;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & div {
        color: ${colours.accent.orange};
    }
`;