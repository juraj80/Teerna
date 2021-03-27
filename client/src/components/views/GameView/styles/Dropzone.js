import styled from 'styled-components';
import { colours, elevation } from '../../../../styles';

export default styled.div`
	color: ${colours.status.info};
	width: 100%;
	padding: 320px 0;
	font-weight: 500;
	text-align: center;
	${elevation(7)};
	position: relative;
	top: 0;
	left: 0;
	margin: 0;
`;
