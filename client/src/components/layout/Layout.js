import { ThemeToggle } from '../core';
import { Console } from './Console';
import { HeaderBar } from './HeaderBar';

export default function Layout({ user, toggleTheme }) {
	return (
		<Console>
			<HeaderBar user={user}/>
			<div style={{ position: 'absolute', bottom: '4px', right: '4px'}}>
				<ThemeToggle toggleTheme={toggleTheme}/>
			</div>
		</Console>
	);
}
