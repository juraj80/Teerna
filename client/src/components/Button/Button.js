import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { typography } from '../../styles';
import { bool, func, oneOf, oneOfType, string, element } from 'prop-types';

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 36px;
	outline: none;
	border: ${({ theme }) => theme.button.border};
	border-radius: ${({ theme }) => theme.borderRadius};
	font-size: ${typography.size.button};
	width: ${({ width }) => width || 'auto'};
	color: ${({ theme }) => theme.button.text};

	padding: 6px 20px;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	&:hover {
		background: ${({ theme, disabled, type }) => {
			let buttonColour = theme.button.background[type];
			if (theme.name === 'light') {
				buttonColour = darken(0.1, buttonColour);
			}
			if (theme.name === 'dark') {
				buttonColour = lighten(0.1, buttonColour);
			}
			return disabled ? lighten(0.18, buttonColour) : buttonColour;
		}};
		${({ theme, type }) =>
			type === 'cta' &&
			css`
				backdrop-filter: blur(${theme.overlay.blur.small});
			`};
	}
`;

export default function Button({ width, disabled, type, children, ...props }) {
	return (
		<StyledButton
			width={width || null}
			disabled={disabled || false}
			type={type}
			{...props}
		>
			{children}
		</StyledButton>
	);
}

const btnTypes = [
	'base',
	'primary',
	'secondary',
	'accept',
	'cancel',
	'danger',
	'disabled',
	'info',
];

Button.propTypes = {
	width: string,
	disabled: bool,
	type: oneOf(btnTypes),
	children: oneOfType([string, element]),
	action: func,
};
