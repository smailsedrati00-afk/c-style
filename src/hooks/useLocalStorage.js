import { useState, useEffect } from "react";

// Works like useState, but saves the value in the browser.
export default function useLocalStorage(key, startValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : startValue;
    } catch {
      return startValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
