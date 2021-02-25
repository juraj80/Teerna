import { transparentize } from "polished";
import styled from "styled-components";
import { round } from "../../../../shared";

export default styled.div`
	width: 100px;
	height: 100px;
	border: 3px solid ${({theme}) => transparentize(0.6, theme.text.console)};
	border-radius: ${round.circular};
	position: relative;
`;