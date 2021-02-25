import { bool, func, oneOf, string } from 'prop-types';
import { ButtonBlock, ButtonLink } from './styles';

export default function Button(props) {
	const { label, type, action, href, disabled } = props;

	return href ? (
		<ButtonLink to={href} disabled={disabled} {...props}>
			{label}
		</ButtonLink>
	) : (
		<ButtonBlock
			onClick={() => !disabled && action()}
			disabled={disabled}
			type={type}
			{...props}
		>
			{label}
		</ButtonBlock>
	);
}

Button.propTypes = {
    action: func,
    href: string,
    type: string,
    status: oneOf(['error','success','warning','info', 'disabled']),
    colour: string,
    disabled: bool,
    label: string.isRequired,
}