import styled from "styled-components";
import { font, space } from "../../../shared";

export default styled.h1`
    display: block;
    width: 100%;
    height: fit-content;
    font-size: ${font.size.medium[200]};
    font-weight: ${font.weight.thin};
    margin-top: ${space.small[300]};
    display: flex;
    justify-content: center;
`;