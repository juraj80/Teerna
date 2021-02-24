import { any, func, string } from 'prop-types';
import { space } from '../../shared';
import { Card, Header, Message, StyledIcon } from './styles';

const Alert = ({ id, type, message, closeAlert, children, ...props }) => (
	<Card type={type} {...props}>
		<StyledIcon
			icon={type}
			style={{
				position: 'relative',
				top: 0,
				left: 0,
				marginRight: space.small[300],
			}}
		/>
		<Message>
			<Header>{message}</Header>
			{children}
		</Message>
		<StyledIcon icon='close' onClick={() => closeAlert(id)} />
	</Card>
);

Alert.propTypes = {
	id: string.isRequired,
	type: string.isRequired,
	children: any.isRequired,
	closeAlert: func.isRequired,
	message: string.isRequired,
};

export default Alert;
