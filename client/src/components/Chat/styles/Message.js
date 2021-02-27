import styled from 'styled-components';
import { space } from '../../../shared';
import { Avatar } from '../../Avatar';

export default styled.div`
	// message anim
	display: flex;
	align-items: center;
	margin-top: ${space.medium[100]};
	&:last-child {
		margin-bottom: ${space.medium[100]};
	}

	& ${Avatar} {
		svg {
			width: 15px;
		}
	}
`;
