import styled from "styled-components";
import { zIndex } from "../../../../../styles";

export default styled.form`
    ${zIndex('above')};
    background: 'transparent';
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;