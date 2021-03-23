import styled from "styled-components";
import { elevation, frostedGlass } from "../../../../../styles";

export default styled.div`
    width: 100%;
    min-height: 88px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 0;

    & button {
        width: 160px;
        margin: 4px 0;
    }
`;