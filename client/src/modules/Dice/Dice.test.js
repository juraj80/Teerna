import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dice from './Dice';

test('renders a dice', () => {
  render(<Dice sides={4}/>);
  const dice = screen.getByText(/d4/i);
  expect(dice).toBeInTheDocument();
});

test('allows different sized dice to be created', () => {
    render(
        <div>
            <Dice sides={4}/>
            <Dice sides={6}/>
            <Dice sides={8}/>
        </div>
    );
    expect(screen.getByText(/d4/)).toBeInTheDocument();
    expect(screen.getByText(/d6/)).toBeInTheDocument();
    expect(screen.getByText(/d8/)).toBeInTheDocument();
});

test('dice rolls result in integers > 0 < sides', async () => {
    const dom = render(
        <div>
            <Dice sides={4}/>
            <Dice sides={6}/>
            <Dice sides={8}/>
        </div>
    );
    for (let d of [4,6,8]) {
        let throws = 0;
        while (throws++ < d) {
            const dice = dom.container.querySelector(`.dice.d${d}`);
            const button = dice.querySelector('button');
            await userEvent.click(button);
            const output = dom.container.querySelector(`.d${d} .result output`);
            const lastResult = parseInt(output.textContent, 10);
            expect(lastResult).toBeGreaterThan(0);
            expect(lastResult).toBeLessThanOrEqual(d);
        }
    }
});
