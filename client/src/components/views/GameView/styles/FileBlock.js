import styled from "styled-components";
import { colours, elevation, font, spacing, zIndex } from "../../../../styles";

export default styled.div`
    max-width: 100%;
    min-height: 60px;
    vertical-align: center;
    ${font(2, 'BODY', false)};
    background: ${({idx}) => {
        if ([0, 4, 8].includes(idx)) return colours.accent.pink;
        else if ([1, 5, 9].includes(idx)) return colours.accent.purple;
        else if ([2, 6, 10].includes(idx)) return colours.accent.mint;
        else if ([3, 7, 11].includes(idx)) return colours.accent.orange;
    }};
    color: ${colours.grey[300]};
    padding: ${spacing[8]};
    ${elevation(15)};
    cursor: pointer;
    ${zIndex('top')};
    position: relative;
    left: 0;
`;