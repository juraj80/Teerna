import styled, { css } from 'styled-components';
import { zIndex } from '../../../../styles';

export default styled.label`
	height: 56px;
	width: 300px;
	background-color: ${({ theme }) => theme.bulbToggle[900]};
	border-radius: 100px;
	display: block;
	box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2),
		inset 0 0 5px -2px rgba(0, 0, 0, 0.4);

	& .bulb {
		height: 48px;
		width: 45px;
		background-color: ${({ theme }) => theme.bulbToggle[100]};
		border-radius: 50%;
		position: relative;
		top: 4px;
		left: 4px;
		display: block;
		transition: 0.7s;
		box-shadow: inset 0 0 1px 3px ${({ theme }) => theme.bulbToggle[800]},
			inset 0 0 6px 8px ${({ theme }) => theme.bulbToggle[200]},
			0 20px 30px -10px rgba(0, 0, 0, 0.4);

		& .bulb-centre {
			position: absolute;
			display: block;
			height: 12px;
			width: 10px;
			background-color: ${({ theme }) => theme.bulbToggle[300]};
			border-radius: 50%;
			top: 50%;
			left: 50%;
			transition: 0.7s;
			transform: translate(-50%, -50%);
			box-shadow: inset 0 0 0 4px ${({ theme }) => theme.bulbToggle[400]};

			&:after {
				content: '';
				display: block;
				height: 6px;
				width: 8px;
				background-color: ${({ theme }) => theme.bulbToggle[500]};
				border-radius: 50%;
				position: absolute;
				transition: 0.7s;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				box-shadow: 0 0 2px 4px ${({ theme }) => theme.bulbToggle[600]};
			}
		}

		& .filament {
			&-1,
			&-2 {
				position: absolute;
				display: block;
				height: 16px;
				width: 16px;
				border-radius: 50%;
				top: 50%;
				left: 50%;
				overflow: hidden;
				transform: translate(-50%, -50%) rotate(-45deg);

				&:before {
					left: 15px;
					transform: rotate(10deg);
				}

				&:after,
				&:before {
					content: '';
					display: block;
					height: 2px;
					width: 8px;
					border-radius: 50%;
					border: 2px solid ${({ theme }) => theme.bulbToggle[800]};
					position: absolute;
					transition: 0.7s;
					top: -4px;
					left: -2px;
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
			${zIndex('above')};
			perspective: 70px;

			& span {
				height: 20px;
				width: 40px;
				border-radius: 50%;
				background-image: linear-gradient(
					-135deg,
					transparent 10%,
					rgba(255, 255, 255, 0.3)
				);
				position: absolute;
				left: -80px;
				bottom: -45px;

				&:after {
					content: '';
					display: block;
					height:12px;
					width: 10px;
					position: absolute;
					top: -36px;
					right: -40px;
					border-radius: 50%;
					box-shadow: 4px -2px 0 -3px rgba(255, 255, 255, 0.4);
					filter: blur(1px);
					transform: rotate(-10deg);
				}
			}

			&:after {
				content: '';
				display: block;
				height: 20px;
				width: 25px;
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
				top: -8px;
				left: -5px; 
			}

			&:before {
				content: '';
				display: block;
				position: absolute;
				height: 2px;
				width: 30px;
				background-image: linear-gradient(
					to right,
					transparent,
					rgba(255, 255, 255, 0.15)
				);
				bottom: 10px;
				right: 0;
				transform: rotate(45deg);
			}
		}
	}

	${({ lit }) =>
		lit &&
		css`
			.bulb {
				left: 240px;
				background-color: #a7694a;
				box-shadow: inset 0 0 1px 3px #a56758,
					inset 0 0 6px 8px ${({ theme }) => theme.bulbToggle[800]},
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
					border-color: ${({ theme }) => theme.bulbToggle[100]};
				}
			}
		`};
`;