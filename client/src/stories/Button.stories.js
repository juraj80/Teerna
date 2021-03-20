import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/core';
import { accents, statuses } from '../consts';

const alertOnClick = e => {
	e.preventDefault();
	alert('You clicked the button.');
};

const statusAlertOnClick = e => {
	e.preventDefault();
	alert('You triggered a status button.');
};

const Wrapper = styled.div`
	width: 600px;
	height: 400px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	background: transparent;
	border: none;
`;

export default {
	component: Button,
	title: 'Button',
};

// accent colours
export const colourButtons = () => (
	<Wrapper>
		{accents.map(a => (
			<Button type='button' accent={a} action={alertOnClick}>
				{a}
			</Button>
		))}
	</Wrapper>
);

// status colours
export const statusButtons = () => (
	<Wrapper>
		{statuses.map(s => (
			<Button type='button' status={s} action={statusAlertOnClick}>
				{s}
			</Button>
		))}
	</Wrapper>
);

// disabled/enabled
export const disabledButton = () => (
	<Button type='button' accent='purple' action={alertOnClick} disabled>
		Disabled Button
	</Button>
);

// glowing
export const glowingButton = () => (
	<Button type='button' accent='purple' action={alertOnClick} glowing>
		Glowup Button
	</Button>
);

// icon variants
//@TODO - uncomment when Icon Done
// export const iconButtons = () => (
// 	<Wrapper>
// 		<Button type='button' accent='mint' action={alertOnClick}>
// 			<Icon icon='google' />
// 		</Button>
// 		<Button type='button' accent='mint' action={alertOnClick}>
// 			<Icon icon='google' />
// 			Google
// 		</Button>
// 		<Button type='button' accent='mint' action={alertOnClick} disabled>
// 			<Icon icon='google' />
// 			Disabled Google
// 		</Button>
// 	</Wrapper>
// );
