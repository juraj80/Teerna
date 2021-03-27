import styled from "styled-components";
import { borderRadius } from "../../../../styles";

export default styled.div`
    width: 100%;
    min-width: 100%;
    min-height: fit-content;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border-radius: ${borderRadius.slight};
`;