import styled from 'styled-components';
import {
	colours,
	elevation,
	spacing,
	zIndex,
} from '../../../../../styles';

export default styled.div`
	${zIndex('above') - 1};
	margin-top: 40px;
	padding: ${spacing[16]} ${spacing[32]};
	position: absolute;
	max-height: 368px;
	max-width: 100%;
	text-align: center;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		${elevation(10)};
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${colours.accent.aqua};
		height: 28px;
		border-radius: 10px;
	}
`;
