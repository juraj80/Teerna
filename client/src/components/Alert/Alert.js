import { any, func, oneOf, string } from 'prop-types';
import { colour, space } from '../../shared';
import { Card, Header, Message, StyledIcon } from './styles';

export default function Alert({ id, status, closeAlert, children, ...props }) {
	return (
		<Card status={status} {...props}>
			<StyledIcon
				fill={colour.status[status]}
				icon={status}
				style={{
					position: 'relative',
					top: 0,
					left: 0,
					marginRight: space.small[300],
				}}
			/>
			<Message>
				<Header color={colour.status[status]}>{message}</Header>
				{children}
			</Message>
			<StyledIcon icon='close' onClick={() => closeAlert(id)} />
		</Card>
	);
}

Alert.propTypes = {
	id: string.isRequired,
	status: oneOf('error', 'success', 'info', 'warning'),
	children: any.isRequired,
	closeAlert: func.isRequired,
	message: string.isRequired,
};

export default Alert;
