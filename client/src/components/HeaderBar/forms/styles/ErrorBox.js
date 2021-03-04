import styled from "styled-components";
import { font } from "../../../../shared";

export default styled.div`
    width: 100%;
    display: block;
    height: 80px;
    /* min-height: 80px; */
    color: ${({theme}) => theme.status.error};
    font-weight: ${font.weight.thin};
    font-size: ${font.size.small[300]};
    text-align: center;
    background: transparent;
    border: none;
`;