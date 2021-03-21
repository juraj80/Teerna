import { any, func, oneOf, string } from 'prop-types';
import { statuses } from '../../../consts';
import { spacing } from '../../../styles';
import { Card, Header, Message, StyledIcon } from './styles';

export default function Alert({ id, status, message, closeAlert, children, ...props }) {
	return (
		<Card role='alertdialog' type={status} {...props}>
			<StyledIcon
				icon={status}
				style={{
					position: 'relative',
					top: 0,
					left: 0,
					marginRight: spacing[8],
				}}
			/>
			<Message>
				<Header>{message}</Header>
				{children}
			</Message>
			<StyledIcon icon='close' onClick={() => closeAlert(id)} />
		</Card>
	);
}

Alert.propTypes = {
	id: string.isRequired,
	status: oneOf(statuses),
	children: any,
	closeAlert: func.isRequired,
	message: string.isRequired,
};
