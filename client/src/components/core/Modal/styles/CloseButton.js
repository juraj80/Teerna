import styled from 'styled-components';
import { invert } from 'polished';
import { colours, font, spacing, zIndex } from '../../../../styles';

export default styled.button`
    ${font(6,'DISPLAY',false)};
    background: transparent;
    border: none;
    outline: none;
    border-radius: none;
    color: ${colours.accent.aqua};
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    ${zIndex('above')};
`;
