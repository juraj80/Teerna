import { Tooltip } from '../components';

export default {
	title: 'Tooltip',
	component: Tooltip,
	decorators: [story => <div style={{ padding: '12px 16px' }}>{story()}</div>],
};

export const standard = () => <Tooltip show={true} helperText='tooltip text' />;
