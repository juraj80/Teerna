import styled from "styled-components";
import { borderRadius, colours, spacing, font } from "../../../../styles";

export default styled.div`
    margin-top: ${spacing[4]};
    padding: ${spacing[4]} ${spacing[16]};
    border-radius: ${borderRadius.round};
    background: ${({status}) => colours.status[status]};
    color: ${colours.grey[300]};
    max-width: '100px';
    max-height: '40px';
    ${font(1, 'TITLE', false)};
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'}; 
`;