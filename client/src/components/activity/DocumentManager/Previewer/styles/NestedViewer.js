import styled from 'styled-components';
import { zIndex } from '../../../../../styles';

export default styled.div`
	${zIndex('above')};
	position: relative;
	text-align: center;
	overflow-y: scroll;
	height: 100%;
`;
