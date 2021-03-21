import styled from 'styled-components';
import { invert } from 'polished';
import { font, spacing, zIndex } from '../../../../styles';

export default styled.button`
    ${font(6,'DISPLAY',false)};
    margin-right: ${spacing[4]};
    border: none;
    outline: none;
    border-radius: none;
    background: 'transparent';
    color: ${({theme}) =>invert(theme.backdrop)};
    padding: 0 ${spacing[8]};
    cursor: pointer;
    ${zIndex('above')};
`;
