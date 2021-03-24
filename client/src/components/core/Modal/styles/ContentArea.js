import styled from 'styled-components';
import { borderRadius, zIndex } from '../../../../styles';

export default styled.div`
    width: 100%;
    height: 400px;
    right: 0;
    bottom: 0;
    border-radius: ${borderRadius.straight};
    ${zIndex('top')};
`;