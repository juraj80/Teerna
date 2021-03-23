import { opacify, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { colours, elevation, frostedGlass, zIndex } from '../../../../styles';

export default styled.aside`
    width: ${({consoleWidth}) => `calc(${consoleWidth} * 0.25)`};
    position: absolute;
    top: 100px;
    right: 0px;
    bottom: 0;
    
    ${elevation(16)};
    border-left: 1px solid ${({theme}) => theme.border.sidebar};
    ${zIndex('bottom')};
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({theme}) => frostedGlass(theme.mode === 'light' ? 'white' : 'black')};
`;