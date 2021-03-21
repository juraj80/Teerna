import styled from "styled-components";
import { font, spacing, zIndex } from "../../../../styles";
import { invert } from "polished";

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
    background: ${({theme}) => theme.modal};
    color: ${({theme}) => invert(theme.modal)};
    margin-bottom: ${spacing[16]};
    ${({size}) => font(size === 'small' ? 6 : size === 'large' ? 8 : 7,'DISPLAY', false)};
    ${zIndex('above')};
`;