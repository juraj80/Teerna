import { any, string, func } from 'prop-types';
import { Icon } from '../../Icon';
import { Container, Box, SubmitButton } from '../styles';

export default function InputIconButton(
    { icon, action, placeholder, value, 
      setValue, btnText, ...props }) {
	return (
		<Container>
			<Icon icon={icon} strokeWidth='0.4'/>
			<Box
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={setValue}
				{...props}
			/>
			<SubmitButton type='submit' action={action}>
				{btnText}
			</SubmitButton>
		</Container>
	);
}

InputIconButton.propTypes = {
    icon: string.isRequired,
	action: func.isRequired,
	placeholder: string.isRequired,
	value: any.isRequired,
	setValue: func.isRequired,
	btnText: string.isRequired,
};
