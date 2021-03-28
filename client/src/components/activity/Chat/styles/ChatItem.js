import { lighten, transparentize } from 'polished';
import styled from 'styled-components';
import { colours, spacing, font } from '../../../../styles';

export default styled.div`
	width: 100%;
    max-width: 320px;
	border-bottom: 1px solid ${transparentize(0.8, colours.accent.aqua)};
    display: flex;
    justify-content: space-between;
    align-items: center;
	text-align: left;
	padding: ${spacing[8]} ${spacing[4]};
    color: ${({theme}) => theme.bartext};
    
	${font(1, 'BODY', false)};

    & .author {
        ${font(1, 'BODY', true)};
        position: absolute;
        right: 0;
    }

	& .time-ago {
		${font(1, 'BODY', true)};
		font-size: 14px;
		padding: ${spacing[4]};
		color: ${({theme}) => theme.mode === 'light' ? colours.grey[100] : lighten(0.2, colours.grey[100])};

		&:after {
			content: ': ';
		}
	}
`;
