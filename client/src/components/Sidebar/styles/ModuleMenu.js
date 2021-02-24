import styled from 'styled-components';
import MenuLink from './MenuLink';
import { font, round, space } from '../../../shared';

export default styled.div`
	white-space: nowrap;

	${MenuLink} {
		font-weight: ${font.weight.regular};
		font-size: ${font.size.medium[100]};
		border-radius: ${round.minimal};
		transition: 0.3s;
	}
`;
