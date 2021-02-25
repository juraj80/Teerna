import styled from 'styled-components';
import { font, round, order } from '../../../shared';

export default styled.div`
    background: ${({theme}) => theme.background.console};
    width: 95vw;
    height: 90vh;
    max-width: ${({consoleWidth}) => consoleWidth}px;
    max-height: ${({consoleHeight}) => consoleHeight}px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: ${round.regular};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: ${font.size.medium[100]};
    font-weight: ${font.weight.regular};
    z-index: ${order.console};
`;