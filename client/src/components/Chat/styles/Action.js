import styled from 'styled-components';
import { lighten } from 'polished';
import { colour, font, round, space } from '../../../shared';

export default styled.div`
	width: 100%;
	border: 0;
	background-color: ${({theme}) => lighten(0.125,theme.background.chat)};
	border-radius: ${round.curved};
	margin-left: calc(-1 * ${space.small[200]});
	padding: ${space.small[200]} ${space.large[200]};
	
    // 3 dots
	background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.48 6.47 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10C6.47 22 2 17.52 2 12zm5.52 1.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.19.54 1.19 1.2 0 .66-.53 1.2-1.19 1.2zM10.8 12c0 .66.54 1.2 1.2 1.2.66 0 1.19-.54 1.19-1.2a1.194 1.194 0 10-2.39 0zm4.48 0a1.195 1.195 0 102.39 0 1.194 1.194 0 10-2.39 0z' fill='%236c6e78'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-size: 24px;
	background-position: ${space.small[200]};


	input {
        width: 100%;
        background: transparent;
        border: none;
        font-size: ${font.size.small[300]};
        font-weight: ${font.weight.bold};
        color: ${({theme}) => theme.text.chat};
        &::placeholder {
	    	color: ${colour.grey[140]};
	    }
	}

	button {
        position: absolute;
		right: ${space.medium[100]};
		width: 24px;
		height: 24px;
		background-color: ${({theme}) => theme.button.purple};
		padding: ${space.small[100]};
		border-radius: ${round.circular};
	}
`;
