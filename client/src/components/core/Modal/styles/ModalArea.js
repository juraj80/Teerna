import styled from 'styled-components';
import { borderRadius, elevation, frostedGlass,  spacing, zIndex } from '../../../../styles';

export default styled.div`
	max-width: ${({ size }) => {
		let width = !size ? 480 : size === 'small' ? 320 : 560;
        return `${width}px`;
	}};
    min-height: 140px;
    height: 400px;
    ${({theme}) => frostedGlass(theme.modal)};
    border-radius: ${borderRadius.straight};
    margin-bottom: ${spacing[32]};
    ${elevation(20)};
    transition: 0.7s;
    ${zIndex('top')};
`;
