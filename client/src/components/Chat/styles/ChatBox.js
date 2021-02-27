import styled from 'styled-components';
import { round, space } from '../../../shared';

export default styled.div`
    background: ${({theme}) => theme.background.chat};
    border-radius: ${round.curved};
    padding: 0 ${space.medium[200]};
    max-height: 600px; // FIXME
    overflow: auto;
`;
