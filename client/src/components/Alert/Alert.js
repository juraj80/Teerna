import { func, oneOfType, string } from 'prop-types';
import { Card, MessageIcon } from './styles';

export default function index({ id, type, children, closeAlert }) {
	const MIcon = MessageIcon(type);
	return (
		<Card type={type}>
			<MIcon />
			<Message>
				<Heading>
					{`${type[0].toUpperCase()}${type.substr(1).toLowerCase()}`}
				</Heading>
				{children}
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
	children: oneOfType([element, string]).isRequired,
	id: string.isRequired,
	closeAlert: func.isRequired,
};
