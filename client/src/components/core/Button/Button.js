import { bool, func, node, oneOf, oneOfType, string } from 'prop-types';
import { statuses, accents } from '../../../consts';
import { Button } from './styles';

export default function Btn(
    { type, accent, status=undefined, disabled, action, glowing, children, ...props}
) {
    const isStatusButton = statuses.includes(status);
    const label = typeof(children) === 'string' 
        ? children.split(' ').join('-') : status || type;

	return (
		<Button 
            role='button'
            aria-label={label}
            type='type' 
            onClick={() => !disabled && action()} 
            disabled={disabled} 
            accent={accent} 
            status={status}
            isStatusButton={isStatusButton}
            glowing={glowing}
            {...props}>
			{children}
		</Button>
	);
}

Btn.propTypes = {
    type: oneOf(['submit','button']).isRequired,
    accent: oneOf(accents),
    status: oneOf(statuses),
    disabled: bool,
    action: func.isRequired,
    glowing: bool,
    children: oneOfType([node, string]).isRequired,
}

