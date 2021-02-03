import { func, oneOfType, string, element } from 'prop-types';
import { Card, Message, Heading, MessageIcon, CloseIcon } from './styles';

export default function index({ id, type, msg, closeAlert }) {
	const MIcon = MessageIcon(type);
	return (
		<Card type={type}>
			<MIcon />
			<Message>
				<Heading>{type}</Heading>
				{msg}
			</Message>
			<CloseIcon
				color={({ theme }) => theme.app.text}
				width='24'
				height='24'
				onClick={() => closeAlert(id)}
			/>
		</Card>
	);
}

index.propTypes = {
	type: string.isRequired,
	msg: string.isRequired,
	children: oneOfType([element, string]).isRequired,
	closeAlert: func.isRequired,
};
