
import { useState } from 'react';

export function useLocalStorage(key: string, initial: string) {
  const [value, setValue] = useState(localStorage.getItem(key) || initial);

  const set = (v: string) => {
    localStorage.setItem(key, v);
    setValue(v);
  };

  return [value, set] as const;
}
