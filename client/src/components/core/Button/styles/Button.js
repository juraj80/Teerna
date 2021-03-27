import styled, { css } from 'styled-components';
import { invert } from 'polished';
import { borderRadius, colours, elevation, font, spacing, zIndex } from '../../../../styles';

export default styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    ${font(2, 'DISPLAY', false)};
    ${elevation(9)};
	border-radius: ${borderRadius.round};
	padding: ${spacing[8]} ${spacing[16]};
    background: ${({isStatusButton, status, accent, disabled}) => { 
        if (disabled) return colours.status.disabled;
        return  isStatusButton ? colours.status[status] : colours.accent[accent]}
    };
	color: ${colours.black};
    border: none;
    transition: 0.3s;
    white-space: nowrap;
    cursor: pointer;
    ${zIndex('top')};

    // Glow effect
	${({ isStatusButton, status, accent, glowing, disabled }) => {
        if (disabled) return colours.status.disabled;
		if (glowing)
			return isStatusButton
				? glowup(colours.status[status])
				: glowup(colours.accent[accent]);
	}}


    &:hover {
        background: ${({isStatusButton, status, accent, disabled}) => {
          if (disabled) return colours.status.disabled;
          return  isStatusButton ? colours.status[status] : colours.accent[accent];
        }};
    }


    ${({disabled}) => disabled && disable};

`;

const glowup = colour => css`
	background: ${colour};
    color: ${colours.white};
	${elevation(11)};
`;

const disable = css`
    background: ${colours.status.disabled};
    color: ${invert(colours.status.disabled)};
    cursor: not-allowed;

    &:hover {
        background: ${colours.status.disabled};
    }
`;