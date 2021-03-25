import styled from "styled-components";
import { borderRadius, elevation, font, spacing } from "../../../../styles";

export default styled.div`
    top: 50px;
    position: relative;
    ${font(4, 'BODY', true)};
    text-align: center;
    padding: ${spacing[16]} ${spacing[32]};
    min-height: 50%;
    min-width: 480px;
    max-width: 800px;
    ${elevation(18)};

    & h1 {
        ${font(5, 'DISPLAY', false)};
    }
`;