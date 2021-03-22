import styled from 'styled-components';
import { borderRadius, blur, zIndex } from '../../../../styles';

export default styled.div`
    background: ${({theme}) => theme.console};
    width: 95vw;
    height: 90vh;
    max-width: ${({consoleWidth}) => consoleWidth}px;
    max-height: ${({consoleHeight}) => consoleHeight}px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: ${borderRadius.slight};
    backdrop-filter: ${blur.reg};
    -webkit-backdrop-filter: ${blur.reg};
    ${zIndex('bottom')};
`;