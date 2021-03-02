import styled, { css } from 'styled-components';
import { colour, font, round, space } from '../../../shared';

export default styled.div`
	position: relative;
	${({ withAlert }) =>
		withAlert &&
		css`
			position: relative;
			&:before {
				content: '';
				font-size: ${font.size.small[100]};
				font-weight: ${font.weight.bold};
				position: absolute;
				background: ${({ theme, status }) => {
					return !status ? theme.button.orange : theme.status[status];
				}};
				width: 14px;
				height: 14px;
				border-radius: ${round.circular};
				top: -3px;
				display: flex;
				justify-content: center;
				align-items: center;
				right: 0;
				color: ${colour.white};
			}
		`};

	svg {
		width: 36px;
		padding: ${space.small[300]};
		flex-shrink: 10px;
		border-radius: ${round.circular};
		overflow: visible;
		background: ${colour.white};
		color: ${({ theme, colour }) => {
			return !colour ? theme.background.button : theme.button[colour];
		}};
	}
`;
