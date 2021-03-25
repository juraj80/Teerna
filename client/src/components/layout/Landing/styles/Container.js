import styled from "styled-components";
import { images } from "../../../../assets";
import { borderRadius } from "../../../../styles";

export default styled.div`
    min-width: 100%;
    min-height: 100%;
    position: relative;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: ${borderRadius.slight};
`;