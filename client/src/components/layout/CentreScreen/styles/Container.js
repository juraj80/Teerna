import styled from "styled-components";
import { zIndex } from "../../../../styles";

export default styled.div`
    width: calc(75% - ${({offset}) => `${offset}px`});
    left: ${({offset}) => offset};
    max-height: calc(100% - 98px);
    height: calc(100% - 98px);
    position: absolute;
    bottom: 0;
    right: 25%;
    background: transparent;
    ${zIndex('bottom')};
`;