import { renderHook, act } from '@testing-library/react-hooks'; 
import useDarkMode from './useDarkMode';


test('expose initial theme, switch between light and dark mode', () => {
    const { result } = renderHook(() => useDarkMode());

    const initialTheme =
         (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
         ? 'dark' 
         : 'light';
    const switchedTheme = initialTheme === 'dark' ? 'light' : 'dark';

    expect(result.current[0]).toBe(initialTheme);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(switchedTheme);
});