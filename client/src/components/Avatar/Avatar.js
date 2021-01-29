import styled, { css } from 'styled-components';
import { element, oneOfType, string, bool, func } from 'prop-types';

import blankUser from '../../assets/blankUser.png';

const sizes = {
	small: '40px',
	medium: '64px',
	large: '80px',
};

const Image = styled.img`
	width: ${({ size }) => sizes[size]};
	height: ${({ size }) => sizes[size]};
	border-radius: 50%;
	object-fit: cover;
	border: 2px solid ${({ theme }) => theme.app.border};
	z-index: 999;
	${({ clickable }) =>
		clickable &&
		css`
			cursor: pointer;
		`}
`;

export default function Avatar({ source, size, clickable, action, ...props }) {
	return (
		<Image
			src={source || blankUser}
			size={size || 'medium'}
			clickable={clickable || false}
			alt='unidentified user'
			onClick={action}
		/>
	);
}

Avatar.propTypes = {
	source: oneOfType([string, element]),
	size: string,
	clickable: bool,
	action: func,
};
