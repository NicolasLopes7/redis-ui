import { useEffect, useState } from 'react';

export const useLocalStorageSync = <T>(key: string, value: T, setValue: (value: T) => void) => {
  const [didFirstLoad, setDidFirstLoad] = useState(false);

  useEffect(() => {
    if (!didFirstLoad) {
      setDidFirstLoad(true);
      const value = localStorage.getItem(key);
      if (!value) return;

      try {
        const parsed = JSON.parse(value) as T;
        setValue(parsed);
      } catch (error) {
        localStorage.removeItem(key);
      }

      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
};
