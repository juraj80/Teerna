import styled from "styled-components";
import { colours, font } from "../../../../styles";

export default styled.h1`
    width: 100%;
    text-align: center;
    ${font(6, 'TITLE', false)};
    color: ${({theme}) => theme.mode === 'dark' ? colours.white : colours.grey[300]};
`;