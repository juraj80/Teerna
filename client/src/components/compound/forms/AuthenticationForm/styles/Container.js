import styled from "styled-components";
import { colours, font, zIndex } from "../../../../../styles";

export default styled.div`
    ${zIndex('above')};
    background: 'transparent';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p {
        ${zIndex('above')};
        color: ${colours.status.info};
        ${font(3, 'BODY', false)};
        text-decoration: underline;
        cursor: pointer;

        &.errortext {
            color: ${colours.status.error};
            text-decoration: none;
            cursor: none;
        }
    }
`;