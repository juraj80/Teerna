import styled from "styled-components";
import { font, space } from "../../../shared";
import { Button } from "../../Button";

export default styled(Button)`
  	background-color: ${({theme}) => theme.button.pink};
	height: 55px;
	border: none;
	font-weight: ${font.weight.extrabold};
	font-size: ${font.size.medium[100]};
	padding: 0 ${space.medium[100]};
	border-radius: 0 ${space.small[200]} ${space.small[200]} 0;
	color: ${({theme}) => theme.text.button};
	cursor: pointer;
	margin-left: auto;  
`;