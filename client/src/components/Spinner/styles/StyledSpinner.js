import styled from 'styled-components';
import { transparentize } from 'polished';
import { round, space, spin } from '../../../shared';

export default styled.div`
	${spin};
	width: 320px;
	height: 320px;
	display: flex;
	justify-content: center;
	align-items: center;

	& div:first-child {
		width: 160px;
		height: 160px;
		padding: ${space.small[100]};
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: ${round.round};
		background: ${({ theme }) =>
			`linear-gradient(
				0deg,
				${transparentize(0.6, theme.spinner.colour)} 33%,
				${transparentize(0.65, theme.spinner.colour)} 100%
			)
		`};
		animation: spin 0.8s linear 0s infinite;

		& div:first-child {
			width: 100%;
			height: 100%;
			border-radius: ${round.round};
		}
	}
`;
