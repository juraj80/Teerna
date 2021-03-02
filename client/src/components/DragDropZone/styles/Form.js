import styled from "styled-components";
import { space } from "../../../shared";

export default styled.form`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 ${space.medium[100]} 0;
    padding: 0 ${space.small[200]};
`;