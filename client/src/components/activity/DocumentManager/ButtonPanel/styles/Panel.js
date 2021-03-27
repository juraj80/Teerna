import styled from "styled-components";
import { spacing } from "../../../../../styles";

export default styled.div`
    width: 100%;
    position: absolute;
    max-height: 22.5%;
    min-height: 20%;
    bottom: ${spacing[16]};
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
 

    & button {
        width: 160px;
        margin: 4px 0;
    }
`;