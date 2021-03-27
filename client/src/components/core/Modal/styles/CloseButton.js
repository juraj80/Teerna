import styled from 'styled-components';
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
    right: ${spacing[16]};
    cursor: pointer;
    ${zIndex('above') + 1};
`;
