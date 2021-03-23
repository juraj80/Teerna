import styled from "styled-components";
import { borderRadius, colours, elevation, spacing, zIndex } from "../../../../../styles";

export default styled.div`
    width: 95%;
    height: 80px;
    background: ${colours.accent.mint};
    color: ${colours.grey[300]};
    ${borderRadius.slight};
    ${elevation(12)};
    padding: ${spacing[16]};
    margin-bottom: ${spacing[4]};
`;