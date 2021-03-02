import { node, string } from 'prop-types';
import { Icon } from '../Icon';
import { Card, Heading, Content, Image } from './styles';

export default function Modal({ icon, image, title, children }) {
	return (
		<Card>
			<Heading>
				{icon && <Icon icon={icon} />}
				{image && <Image src={image} alt={title} />}
				{title}
			</Heading>
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
