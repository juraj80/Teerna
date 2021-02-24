import { Icon } from '../components';
import { colour } from '../shared';

export default {
	component: Icon,
	title: 'Icon',
};

export const basic = <Icon icon='notification' />;

export const sizes = (
	<>
		<Icon icon='notification' />
		<Icon icon='notification' width='32px' height='32px' />
	</>
);

export const customColour = (
	<>
		<Icon icon='notification' colour={colour.blue[200]} />
		<Icon icon='notification' colour={colour.white[300]} />
		<Icon icon='notification' colour={colour.black} />
	</>
);
