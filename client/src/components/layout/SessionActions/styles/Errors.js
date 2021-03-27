import styled from "styled-components";
import { colours, font, spacing } from "../../../../styles";

export default styled.ul`
    list-style-type: none;
    text-align: center;
    color: ${colours.status.error};
    ${font(2, 'DISPLAY', false)};
    position: relative;
    left: 0;

    & li {
        text-indent: 0;
        padding: 0 12px;
    }
`;