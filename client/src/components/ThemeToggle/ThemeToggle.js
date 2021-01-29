import styled from 'styled-components';
import { AGreen, ARed } from '../../styles';

const Toggle = styled.div``;

const CheckerLabel = styled.label`
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #fe4551;
	box-shadow: 0 10px 10px 0 rgba(#fe4551, 0.3);
	${ARed}

	&:active {
		width: 28px;
		height: 28px;
		box-shadow: 0 7.5px 7.5px 0 rgba(#fe4551, 0.5);

		& ${Toggle} {
			height: 5px;
			width: 5px;
		}
	}

	& ${Toggle} {
		transition: all 0.2s ease-in-out;
		height: 5px;
		width: 5px;
		background: transparent;
		border: 2px solid #fff;
		border-radius: 50%;
		cursor: pointer;

		animation: red 0.7s linear forwards;
	}
`;

const Checker = styled.input`
	display: none;
	${AGreen};
	&:checked {
		& + ${CheckerLabel} {
			background: #48e98a;
			box-shadow: 0 10px 10px 0 rgba(#48e98a, 0.3);

			&:active {
				box-shadow: 0 7.5px 7.5px 0 rgba(#48e98a, 0.5);
			}

			& ${Toggle} {
				width: 0;
				background: #fff;
				border-color: transparent;
				border-radius: 30px;
				animation: green 0.7s linear forwards !important;
			}
		}
	}
`;

export default function ({ toggleTheme }) {
	return (
		<>
			<Checker
				style={{ marginLeft: '16px' }}
				onChange={toggleTheme}
				id='toggle'
				type='checkbox'
			/>
			<CheckerLabel htmlFor='toggle'>
				<Toggle />
			</CheckerLabel>
		</>
	);
}
