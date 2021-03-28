import styled from "styled-components";
import { colours } from "../../../../styles";

export default styled.div`
    width: 100%;
    min-height: 100%;
    background: ${({theme}) => theme.mode === 'light' ? colours.white : colours.grey[200]};
    overflow-y: auto;
`;