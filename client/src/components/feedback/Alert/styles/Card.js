import styled from 'styled-components';
import { spacing, frostedGlass, elevation } from '../../../../styles';

export default styled.div`
	${({type}) => frostedGlass(undefined, 'status', type)};
	padding: ${spacing[32]} ${spacing[16]};
	max-width: 480px;
	${elevation(20)};
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: ${spacing[16]};
`;
