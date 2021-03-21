import styled from 'styled-components';
import { spacing, font, colours, zIndex } from '../../../../styles';
export default styled.div`
	display: flex;
	flex-direction: column;
	${zIndex('above')};
	${font(2, 'BODY', false)};
	margin-right: ${spacing[8]};
`;
