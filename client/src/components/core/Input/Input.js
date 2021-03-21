import { bool, func, oneOf, string } from 'prop-types';
import { iconNames } from '../../../consts';
import { Icon } from '../Icon';
import { Wrapper, TextInput } from './styles';


export default function Input({ type, requiredField, leftIcon, rightIcon, rightIconAction, nameAttr, placeholder, setValue, value, disabled, ...props }) {
    const iconPositions = (leftIcon && rightIcon) ? 'both': (leftIcon) ? 'start': (rightIcon) ? 'end' : undefined;
    return (
		<Wrapper iconPositions={iconPositions} {...props}>
			<TextInput
                iconPositions={iconPositions} 
                aria-required={requiredField}
                aria-placeholder={placeholder}
                type={type}
                name={nameAttr}
                disabled={disabled}
				onChange={e => !disabled && setValue(e.target.value)}
				value={value}
                placeholder={placeholder}
				{...props}
			/>
                {leftIcon && <Icon className='start' icon={leftIcon} />}
                {(rightIcon && rightIconAction) && (<Icon className='end' icon={rightIcon} status='action' onClick={() => !disabled && rightIconAction()}/>)}
                {(rightIcon && !rightIconAction) && (<Icon className='end' icon={rightIcon} /> )}
           
		</Wrapper>
	);
};

Input.propTypes = {
    type: oneOf(['text','email','password']),
    requiredField: bool,
    leftIcon: oneOf(iconNames),
    rightIcon: oneOf(iconNames),
    rightIconAction: func,
    nameAttr: string.isRequired,
    setValue: func.isRequired, 
    value: string.isRequired,
    disabled: bool,
    placeholder: string.isRequired,
};

Input.defaultProps = {
	type: 'text',
};
