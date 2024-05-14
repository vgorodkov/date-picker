import { useEffect, useState } from 'react';

export const useStickyState = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : initialValue;
  });

  const isArray = Array.isArray(value);

  useEffect(() => {
    if (!value || (isArray && value.length < 1)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isArray]);

  return [value, setValue];
};
