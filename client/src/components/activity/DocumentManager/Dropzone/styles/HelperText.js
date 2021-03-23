import styled from 'styled-components';
import { font, colours } from '../../../../../styles';

export default styled.div`
	color: ${colours.status.error};
	${font(1, 'DISPLAY', false)};
	text-align: center;
`;
