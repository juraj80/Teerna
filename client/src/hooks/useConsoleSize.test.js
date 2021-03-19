import { renderHook, act} from '@testing-library/react-hooks';
import useConsoleSize from './useConsoleSize';

test('exposes the initial size of the console based on window size', () => {
    const {result} = renderHook(useConsoleSize);
    expect(result.current.width).toBeCloseTo(innerWidth - 64);
    expect(result.current.height).toBeCloseTo(innerHeight - 34);
});

test('console size changes proportionately on window resize', () => {
    const {result} = renderHook(useConsoleSize);
    // console width
    act(() => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 640,
        });
        window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.width).toBeCloseTo(576);
    
    // console height
    act(() => {
        Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: 640,
        });
        window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.height).toBeCloseTo(608);
})