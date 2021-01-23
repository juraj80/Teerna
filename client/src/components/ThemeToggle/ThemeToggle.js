import styled from 'styled-components';
import { ARed, AGreen } from '../../styles';

const Toggle = styled.div``;

const Checker = styled.input`
	display: none;
	&:checked {
		& + ${CheckerLabel} {
			background: #48e98a;
			box-shadow: 0 20px 20px 0 rgba(#48e98a, 0.3);

			&:active {
				box-shadow: 0 15px 15px 0 rgba(#48e98a, 0.5);
			}

			& ${Toggle} {
				width: 0;
				background: #fff;
				border-color: transparent;
				border-radius: 30px;
				animation: ${AGreen} 0.7s linear forwards !important;
			}
		}
	}
`;

const CheckerLabel = styled.label`
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background: #fe4551;
	box-shadow: 0 20px 20px 0 rgba(#fe4551, 0.3);

	&:active {
		width: 95px;
		height: 95px;
		box-shadow: 0 15px 15px 0 rgba(#fe4551, 0.5);

		& ${Toggle} {
			height: 17px;
			width: 17px;
		}
	}

	& ${Toggle} {
		transition: all 0.2s ease-in-out;
		height: 20px;
		width: 20px;
		background: transparent;
		border: 10px solid #fff;
		border-radius: 50%;
		cursor: pointer;

		animation: ${ARed} 0.7s linear forwards;
	}
`;

export default function ({ toggleTheme }) {
	return (
		<>
			<Checker id='toggle' type='checkbox' onClick={toggleTheme} />
			<CheckerLabel for='toggle'>
				<Toggle></Toggle>
			</CheckerLabel>
		</>
	);
}
