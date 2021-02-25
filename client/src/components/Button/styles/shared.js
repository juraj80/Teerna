import { css } from 'styled-components';
import { colour, font, round, space } from '../../../shared';

export const styling = css`
 	display: flex;
 	align-items: center;
    background: ${({colour, theme}) => {
        return !colour 
            ? theme.background.button
            : theme.button[colour];
    }};
	padding: ${space.medium[100]};
	text-align: center;
	justify-content: center;
	margin-top: auto;
	margin-right: 0;
	color: ${colour.white};
	font-size: ${font.size.small[300]};
    border-radius: ${round.square};
	cursor: pointer;
`;