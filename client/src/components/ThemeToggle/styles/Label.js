import styled, { css } from 'styled-components';
import { order, round } from '../../../shared';

export default styled.label`
	height: calc(110px * 0.65 / 2);
	width: calc(220px);
	background-color: ${({ theme }) => theme.themeToggle[900]};
	border-radius: 100px;
	display: block;
	box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2),
		inset 0 0 5px -2px rgba(0, 0, 0, 0.4);

	& .bulb {
		height: calc(90px * 0.5 / 2);
		width: calc(90px * 0.5 / 2);
		background-color: ${({ theme }) => theme.themeToggle[100]};
		border-radius: 50%;
		position: relative;
		top: calc(10px / 2);
		left: calc(10px / 1.75);
		display: block;
		transition: 0.7s;
		box-shadow: inset 0 0 1px 3px ${({ theme }) => theme.themeToggle[800]},
			inset 0 0 6px 8px ${({ theme }) => theme.themeToggle[200]},
			0 20px 30px -10px rgba(0, 0, 0, 0.4);

		& .bulb-centre {
			position: absolute;
			display: block;
			height: calc(36px * 0.5 / 2);
			width: calc(36px * 0.5 / 1.75);
			background-color: ${({ theme }) => theme.themeToggle[300]};
			border-radius: 50%;
			top: 50%;
			left: 50%;
			transition: 0.7s;
			transform: translate(-50%, -50%);
			box-shadow: inset 0 0 0 4px ${({ theme }) => theme.themeToggle[400]};

			&:after {
				content: '';
				display: block;
				height: calc(14px * 0.5 / 2);
				width: calc(14px * 0.5 / 2.25);
				background-color: ${({ theme }) => theme.themeToggle[500]};
				border-radius: 50%;
				position: absolute;
				transition: 0.7s;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				box-shadow: 0 0 2px 4px ${({ theme }) => theme.themeToggle[600]};
			}
		}

		& .filament {
			&-1,
			&-2 {
				position: absolute;
				display: block;
				height: calc(35px * 0.5 / 2);
				width: calc(35px * 0.5 / 2);
				border-radius: 50%;
				top: 50%;
				left: 50%;
				overflow: hidden;
				transform: translate(-50%, -50%) rotate(-45deg);

				&:before {
					left: calc(15px / 2);
					transform: rotate(10deg);
				}

				&:after,
				&:before {
					content: '';
					display: block;
					height: calc(6px * 0.5 / 2);
					width: calc(17px * 0.5 / 2);
					border-radius: 50%;
					border: 2px solid ${({ theme }) => theme.themeToggle[800]};
					position: absolute;
					transition: 0.7s;
					top: calc(-4px / 2);
					left: calc(-2px / 2);
					transform: rotate(-10deg);
				}
			}

			&-2 {
				transform: translate(-50%, -50%) rotate(45deg) !important;
			}
		}

		& .reflections {
			height: 100%;
			width: 100%;
			display: block;
			border-radius: 50%;
			overflow: hidden;
			position: absolute;
			z-index: ${order.themeToggle};
			perspective: 70px;

			& span {
				height: calc(80px * 0.5 / 2);
				width: calc(80px * 0.5 / 2);
				border-radius: 50%;
				background-image: linear-gradient(
					-135deg,
					transparent 10%,
					rgba(255, 255, 255, 0.3)
				);
				position: absolute;
				left: calc(-40px / 2);
				bottom: calc(-45px / 2);

				&:after {
					content: '';
					display: block;
					height: calc(35px * 0.5 / 2);
					width: calc(20px * 0.5 / 2);
					position: absolute;
					top: calc(-36px / 2);
					right: calc(-40px / 2);
					border-radius: 50%;
					box-shadow: 4px -2px 0 -3px rgba(255, 255, 255, 0.4);
					filter: blur(1px);
					transform: rotate(-10deg);
				}
			}

			&:after {
				content: '';
				display: block;
				height: calc(80px * 0.5 / 2);
				width: calc(50px * 0.5 / 2);
				background-image: linear-gradient(
					80deg,
					rgba(255, 255, 255, 0.05) 45%,
					rgba(255, 255, 255, 0.5)
				);
				border-radius: 10% 20% 50% 30%/30% 60% 30% 40%;
				position: absolute;
				transform-style: preserve-3d;
				transform: rotateX(-25deg) rotate(-35deg) skewx(-15deg)
					translate(10px, -20px);
				top: calc(-8px / 2);
				left: calc(-5px / 2);
			}

			&:before {
				content: '';
				display: block;
				position: absolute;
				height: calc(10px * 0.5 / 2);
				width: calc(30px * 0.5 / 2);
				background-image: linear-gradient(
					to right,
					transparent,
					rgba(255, 255, 255, 0.15)
				);
				bottom: calc(10px / 2);
				right: 0;
				transform: rotate(45deg);
			}
		}
	}

	${({ lit }) =>
		lit &&
		css`
			.bulb {
				left: calc(190px);
				background-color: #a7694a;
				box-shadow: inset 0 0 1px 3px #a56758,
					inset 0 0 6px 8px ${({ theme }) => theme.themeToggle[800]},
					0 20px 30px -10px rgba(0, 0, 0, 0.4),
					0 0 30px 50px rgba(253, 184, 67, 0.1);

				& > .bulb-centre {
					background-color: #feed6b;
					box-shadow: inset 0 0 0 4px #fdec6a, 0 0 12px 10px #bca83c,
						0 0 20px 14px #a1664a;

					&:after {
						background-color: #fef401;
						box-shadow: 0 0 2px 4px #fdb843;
					}
				}

				& > .filament-1:before,
				& > .filament-2:before,
				& > .filament-1:after,
				& > .filament-2:after {
					border-color: ${({ theme }) => theme.themeToggle[100]};
				}
			}
		`};
`;