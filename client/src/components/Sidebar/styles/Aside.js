import styled from 'styled-components';

export default styled.aside`
	overflow-x: hidden;
	width: 0;
	position: absolute;
	top: 106px;
	left: -1px;
	bottom: 0;
	background: ${({theme}) => theme.background.sidebar};
	transition: width 0.5s ease-in-out;
	border-right: 1px solid ${({theme}) => theme.border.sidebar};

    &.drawerIconOnly {
        width: 70px;
    }

    &.drawerOpen {
        width: 300px;
    }
`;
