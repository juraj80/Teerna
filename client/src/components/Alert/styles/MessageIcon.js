import styled from 'styled-components';
import { Icon } from '../../Icon';

const StyledIcon = styled(Icon)`
	margin: 0 10px;

	path {
		fill-opacity: 1;
		fill: ${({ theme }) => theme.app.text};
	}
`;

export default function MessageIcon({ type }) {
	return <StyledIcon icon={type} />;
}
