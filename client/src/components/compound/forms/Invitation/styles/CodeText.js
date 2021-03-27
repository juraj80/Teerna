import styled from "styled-components";
import { colours, font } from "../../../../../styles";

export default styled.h1`
    ${font(3, 'DISPLAY', false)};
    color: ${colours.accent.orange};
    text-align: center;
    width: 100%;
`;