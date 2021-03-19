import { renderHook, act } from '@testing-library/react-hooks'; 
import useDarkMode from './useDarkMode';


test('expose initial theme, switch between light and dark mode', () => {
    const { result } = renderHook(useDarkMode);
    
    const localTheme = localStorage.getItem('theme');
    const initialTheme =
         (matchMedia && matchMedia('(prefers-color-scheme: dark)').matches && !localTheme)
         ? 'dark' 
         : 'light';
    const switchedTheme = initialTheme === 'dark' ? 'light' : 'dark';


    expect(result.current.theme).toBe(initialTheme);
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe(switchedTheme);
});