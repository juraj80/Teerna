import styled from "styled-components";
import { borderRadius, colours, font, spacing } from "../../../../styles";

export default styled.div`
    padding-top: ${spacing[8]};
    height: 24px;
   
    
    .user-typing {
        padding: 2px ${spacing[4]};
        height: 20px;
        border-radius: ${borderRadius.round};
        color: ${colours.grey[200]};
        font-size: 12px;
    }

    &:before{ 
        display:${({active}) => !active ? 'none' : 'block'};
        content: 'typing: ';
        color: ${colours.grey[200]};
        ${font(1, 'BODY', false)};
        font-size: 12px;
    }

`;