import styled, { css } from 'styled-components';
import { order } from '../../../shared';

export default styled.aside`
    width: 0;
    position: absolute;
    top: 106px;
    right: -50px;
    bottom: 0;
    background: ${({theme}) => theme.background.chat};
    transition: all 0.5s ease-in-out;
    border-left: 1px solid ${({theme}) => theme.border.sidebar};
    order: ${order.sidebar};

    ${({drawerOpen}) => drawerOpen && css`
        width: 300px;
        right: 0;
    `};

    & .close {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        left: -32.5px;
    }
`;