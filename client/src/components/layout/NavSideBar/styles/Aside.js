import styled from 'styled-components';
import { invert,transparentize } from 'polished';

export default styled.aside`
	overflow: hidden;
	width: 0;
	position: absolute;
	top: 98px;
	left: -1px;
	bottom:0;
	background: ${({theme}) => transparentize(0.8,invert(theme.bartext))};
	transition: width 0.2s ease-in-out;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    &.drawerIconOnly {
        width: 70px;
    }

    &.drawerOpen {
        width: ${({consoleWidth}) => `calc(${consoleWidth} * 1 / 5)`};
    }
`;
