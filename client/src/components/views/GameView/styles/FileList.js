import styled from "styled-components";
import { colours, elevation, zIndex } from "../../../../styles";

export default styled.div`
	position: absolute;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
	width: 22.5%;
	height: 100%;
	background: ${({theme}) => theme.console};

    ::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		${elevation(10)};
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${colours.accent.aqua};
		height: 28px;
		border-radius: 10px;
	}
`;