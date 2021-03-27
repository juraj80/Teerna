import styled from 'styled-components';
import { elevation, frostedGlass, zIndex } from '../../../../styles';

export default styled.aside`
    width: ${({consoleWidth}) => `calc(${consoleWidth} * 0.25)`};
    position: absolute;
    top: 96px;
    right: 2px;
    bottom: 2px;
    
    ${elevation(16)};
    border-left: 1px solid ${({theme}) => theme.border.sidebar};
    ${zIndex('bottom')};
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({theme}) => frostedGlass(theme.mode === 'light' ? 'white' : 'black')};
`;