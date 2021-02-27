import { darken } from "polished";
import styled from "styled-components";
import { font, order, space } from '../../../shared';

export default styled.div`
    // chat-header anim
    display: flex;
    align-items: center;
    padding: ${space.medium[200]} 0;
    font-size: ${font.size.medium[100]};
    font-weight: ${font.weight.bold};
    color: ${({theme}) => theme.text.chat};
    background: ${({theme}) => theme.background.chat};
    position: sticky;
    top: 0;
    left: 0;
    z-index: ${order.chatbar};
    border-bottom: 1px solid ${({theme}) => theme.border.chat};

    svg {
        margin-right: ${space.small[200]};
        flex-shrink: 0;
    }

    span {
        margin-left: auto;
        color: ${({theme}) => darken(0.125, theme.text.chat)};
        font-size: ${font.size.small[200]};
        display: flex;
        align-items: center;
    }
`;

