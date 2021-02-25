import { any, func, string } from 'prop-types';
import { Box } from '../styles';

export default function Input({ placeholder, setValue, value, ...props }) {
	return (
		<Box
			placeholder={placeholder}
			onChange={e => setValue(e.target.value)}
			value={value}
			{...props}
		/>
	);
}

Input.propTypes = {
	placeholder: string.isRequired,
	value: any.isRequired,
	setValue: func.isRequired,
};
