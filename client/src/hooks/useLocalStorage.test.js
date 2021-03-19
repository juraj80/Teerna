import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from "./useLocalStorage";

test('sets local storage item associated to key', () => {
    const { result } = renderHook(() => useLocalStorage('secretword'));
    expect(result.current.state.secretWord).toBe('');
    act(() => result.current.setState('mysecretword'));
    expect(result.current.state.secretWord).toBe('mysecretword');
});

test('retrieves local storage item by key', () => {
    const { result } = renderHook(() => useLocalStorage('secretword', { secret: 'mysecret', decoder: '1243'}));
    expect(result.current.state.secret).toBe('mysecret');
    expect(result.current.state.decoder).toBe('1243');
});