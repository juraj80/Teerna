import styled from 'styled-components';
import { Icon } from '../components/core';
import { iconNames, statuses } from '../consts';

const Wrapper = styled.div`
	width: 600px;
	height: 400px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	background: transparent;
	border: none;
`;

export default {
	component: Icon,
	title: 'Icon',
};

export const allSizes = () => (
	<Wrapper>
		<Icon icon='close' />
		<Icon icon='close' size='large' />
	</Wrapper>
);

export const allIcons = () => (
	<Wrapper>
		{iconNames.map(name => {
			if (statuses.includes(name)) {
				return <Icon icon={name} status={name} />;
			} else {
				return <Icon icon={name} />;
			}
		})}
	</Wrapper>
);
