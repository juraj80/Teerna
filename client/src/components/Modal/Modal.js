import { node, string } from 'prop-types';
import { Icon } from '../Icon';
import { Card, Header, Content, Image } from './styles';

export default function Modal({ icon, image, title, children }) {
	return (
		<Card>
			<Header>
				{icon && <Icon icon={icon} />}
				{image && <Image src={image} alt={title} />}
				{title}
			</Header>
			<Content>{children}</Content>
		</Card>
	);
}

Modal.propTypes = {
	icon: string,
	image: string,
	title: string.isRequired,
	children: node.isRequired,
};
