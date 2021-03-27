import styled from 'styled-components';
import { images } from '../../../../assets';
import { colours, elevation } from '../../../../styles';

export default styled.div`

	position: relative;
	left: 25%;
	right: 0;
	bottom: 48px;
	top: 0;
	background-image: ${({ theme }) =>
		theme.mode === 'light'
			? `url('${images.backgrounds.TeernaBG}'), ${theme.console}`
			: `url('${images.backgrounds.TeernaBG}'), ${theme.console}`},
	;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
	text-align: center;
	/* padding: 24px; */
	width: 800px;
	max-width: 74%;
	max-height: 600px;
	height: 100%;
	overflow-y: scroll;

	
    ::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		${elevation(10)};
		border-radius: 10px;
		height:50px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${colours.accent.aqua};
		height: 28px;
		border-radius: 10px;
	}
`;
