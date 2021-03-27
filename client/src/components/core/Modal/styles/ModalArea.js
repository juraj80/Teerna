import styled from 'styled-components';
import { borderRadius, elevation, frostedGlass, zIndex } from '../../../../styles';

export default styled.div`
	width: ${({ size }) => {
		let width = !size ? 480 : size === 'large' ? 560 : 320;
        return `${width}px`;
	}};
    min-height: 360px;
    max-height: 480px;
    ${({theme}) => frostedGlass(theme.modal)};
    border-radius: ${borderRadius.slight};
    ${elevation(20)};
    transition: 0.3s;
    ${zIndex('top')};
    position: relative;
`;
