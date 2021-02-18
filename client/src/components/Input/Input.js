import { any, bool, func, oneOf, string } from 'prop-types';
import { Icon } from '../Icon';
import { InputWrapper, StyledInput } from './styles';

const Input = ({ icon, withIcon, setValue, value, ...props }) => {
	return (
		<InputWrapper withIcon={withIcon} {...props}>
			{withIcon && <Icon icon={icon} />}
			<StyledInput
				onChange={e => setValue(e.target.value)}
				value={value}
				{...props}
			/>
		</InputWrapper>
	);
};

Input.propTypes = {
	name: string.isRequired,
	type: oneOf(['text', 'number', 'date', 'textarea', 'password', 'email']),
	withIcon: bool,
	icon: string,
	placeholder: string,
	value: any.isRequired,
	setValue: func.isRequired,
};

Input.defaultProps = {
	type: 'text',
	withIcon: false,
	icon: 'eye',
	placeholder: 'password',
};

export default Input;
