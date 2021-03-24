import styled from 'styled-components';
import { font, colours } from '../../../../../styles';

export default styled.div`
	color: ${colours.status.error};
	${font(2, 'BODY', false)};
	text-align: center;
	position: relative;
	min-height: 28px;
	`;
