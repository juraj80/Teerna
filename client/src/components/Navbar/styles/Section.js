import styled from 'styled-components';
import { space } from '../../../shared';

export default styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	&:first-child {
		justify-content: flex-start;
	}

	&:last-child {
		justify-content: flex-end;
	}

	&:first-child,
	&:last-child {
		width: calc(20% - ${space.medium[200]});
		min-width: calc(20% - ${space.medium[200]});
	}

	&:nth-child(2),
	&:nth-child(4) {
		width: calc(10% - ${space.medium[200]});
		min-width: calc(10% - ${space.medium[200]});
	}

	&:nth-child(3) {
		width: calc(40% - ${space.medium[200]});
		min-width: calc(40% - ${space.medium[200]});
	}
`;
