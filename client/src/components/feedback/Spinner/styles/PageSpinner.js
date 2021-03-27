import styled from 'styled-components';
import { colours, spin } from '../../../../styles';

export default styled.div`
    ${spin};
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
        content: '';
        width: 100px;
        height: 100px;
        border: 1px solid ${colours.grey[100]};
        border-top-color: ${colours.accent.orange};
        background: transparent;
        border-radius: 50%;
        animation: spin 0.8s 0.1s ease-in-out infinite both;
    }
`;