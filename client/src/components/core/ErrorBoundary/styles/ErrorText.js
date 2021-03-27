import styled from "styled-components";
import { font } from "../../../../styles";

export default styled.div`
    ${font(7, 'DISPLAY', false)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: fit-content;
    height: fit-content;
    min-height: 500px;
    background-color: transparent;
    border: none;
`;