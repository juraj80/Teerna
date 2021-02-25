import styled from "styled-components";
import { font, space } from "../../../shared";

export default styled.div`
		font-size: ${font.size.medium};
		font-weight: ${font.weight.bold};
		line-height: 1.6em;
		margin-top: ${space.medium[200]};
		border-bottom: 1px solid ${({theme}) => theme.border.modal};
		padding-bottom: ${space.medium[200]};
`;