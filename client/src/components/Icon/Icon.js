import styled, { css } from 'styled-components';
import { bool, string } from 'prop-types';
import { icons } from '../../shared';

const Wrapper = styled.div`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	${({ googleWrapped }) =>
		googleWrapped &&
		css`
			position: absolute;
			margin-top: 1px;
			margin-left: 1px;
			width: 56px;
			height: 56px;
			border-radius: 2px;
			user-select: none;
		`}
`;

const SVG = styled.svg`
	width: 100%;
	height: 100%;

	${({ googleWrapped }) =>
		googleWrapped &&
		css`
			position: absolute;
			margin-top: 8px;
			margin-left: 0;
			width: 48px;
			height: 48px;
			user-select: none;
		`}

	& path {
		${({ filled, colour }) =>
			filled &&
			css`
				fill: ${colour ? colour : 'currentColor'};
			`};

		${({ filled, colour }) =>
			!filled &&
			css`
				stroke: ${colour ? colour : 'currentColor'};
			`};
	}
`;

const sizes = {
	small: 20,
	standard: 32,
	large: 48,
};

const Icon = ({ icon, size, stroke, colour, filled, ...props }) => {
	return (
		<Wrapper
			width={sizes[size] || 32}
			height={sizes[size] || 32}
			googleWrapped={props.googleWrapped}
		>
			<SVG
				googleWrapped={props.googleWrapped}
				stroke={stroke || '2px'}
				colour={colour || null}
				filled={filled || false}
				{...props}
			>
				<path d={icons[icon]}></path>
			</SVG>
		</Wrapper>
	);
};

Icon.propTypes = {
	icon: string.isRequired,
	size: string,
	stroke: string,
	colour: string,
	filled: bool,
	googleWrapped: bool,
};

export default Icon;
