import styled from 'styled-components';
import { borderRadius, zIndex } from '../../../../styles';

export default styled.div`
    width: 100%;
    max-height: 380px;
    position: relative;
    top: 30px;
    right: 0;
    bottom: 0;
    border-radius: ${borderRadius.slight};
    ${zIndex('top')};
`;