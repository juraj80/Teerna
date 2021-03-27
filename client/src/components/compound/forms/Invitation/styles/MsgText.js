import styled from "styled-components";
import { colours, font } from "../../../../../styles";

export default styled.pre`
    ${font(3, 'DISPLAY', false)};
    color: ${({theme}) => theme.mode === 'light' ? colours.grey[300] : colours.white};
    text-align: center;
    width: 100%;
`;