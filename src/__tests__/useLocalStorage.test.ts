
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../hooks/useLocalStorage';

test('stores value', () => {
  const { result } = renderHook(() => useLocalStorage('k', 'v'));
  act(() => result.current[1]('new'));
});
