import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

test('action is triggered on click', () => {
	let called = false;
	const { container } = render(
		<Button type='button' action={() => {called=true}} accent='orange'>
			trigger action
		</Button>
	);
	const button = container.querySelector('button');

	expect(called).toBe(false);
	fireEvent.click(button);
	expect(called).toBe(true);
});

test('action is not triggered if button is disabled',() => {
    let called = false;
	const { container } = render(
		<Button type='button' action={() => { called = true}} accent='orange' disabled>
			trigger action
		</Button>
	);
	const button = container.querySelector('button');

	expect(called).toBe(false);
	fireEvent.click(button);
	expect(called).toBe(false);
})