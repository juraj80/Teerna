import { func, oneOf, string, bool } from 'prop-types';
import { ButtonWrapper, LinkWrapper } from './styles';
import { Icon } from '../Icon';

const Button = ({ action, href, icon, text, colour, fill, ...props }) => {
	if (href)
		return (
			<LinkWrapper to={href} colour={colour} fill={fill} {...props}>
				{icon && <Icon icon={icon} fill='fill' background={colour} />}
				{text}
			</LinkWrapper>
		);

	return (
		<ButtonWrapper
			onClick={action}
			colour={colour}
			fill={fill}
			status={status}
			{...props}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			{icon && <Icon icon={icon} fill='fill' background={colour} />}
			{text}
		</ButtonWrapper>
	);
};

const bntFills = ['outline', 'fill'];
const btnBorders = ['minimal', 'regular', 'exaggerated', 'round'];
const btnTypes = ['button', 'submit', 'cancel'];
const btnColours = ['blue', 'black', 'white'];

Button.propTypes = {
	text: string,
	fill: oneOf(bntFills),
	border: oneOf(btnBorders),
	action: func,
	href: string,
	type: oneOf(btnTypes),
	colour: oneOf(btnColours),
	icon: string,
	disabled: bool,
};

export default Button;
