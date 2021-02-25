import { arrayOf, string } from 'prop-types';
import { Avatar } from '../Avatar';
import { Container } from './styles';

export default function AvatarGroup({ sources }) {
	return (
		<Container>
			{sources.map(source => (
				<Avatar source={source} size='small' />
			))}
		</Container>
	);
}

AvatarGroup.propTypes = {
	sources: arrayOf(string).isRequired,
};
