import styled from "styled-components";
import { colours, elevation, font, frostedGlass, spacing, zIndex } from "../../../../styles";

export default styled.div`
    max-width: 100%;
    min-height: 60px;
    ${font(3, 'DISPLAY', false)};
    ${({idx}) => {
        if ([0, 4, 8].includes(idx)) return frostedGlass('black', 'accent', 'pink');
        else if ([1, 5, 9].includes(idx)) return frostedGlass('black', 'accent', 'purple');
        else if ([2, 6, 10].includes(idx)) return frostedGlass('black', 'accent', 'mint');
        else if ([3, 7, 11].includes(idx)) return frostedGlass('black', 'accent', 'orange');
    }};
    padding: ${spacing[8]};
    ${elevation(15)};
    cursor: pointer;
    position: relative;
    left: 0;

    p {
        color: ${colours.grey[300]};
        position: relative;
        font-weight: bolder;
        text-align: center;
    }
`;