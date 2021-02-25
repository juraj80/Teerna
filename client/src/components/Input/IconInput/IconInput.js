import { Icon } from '../../Icon';
import { Box, Container } from '../styles';

export default function IconInput({icon, value, setValue, placeholder, ...props}) {
	return (
		<Container>
			<Icon
				icon={icon}
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				stoke-line-join='round'
			/>
			<Box 
                type='text' 
                placeholder={placeholder} 
                value={value}
                onChange={setValue}
                {...props}
            />
		</Container>
	);
}
