import { useEffect, useState } from "react";

function useDebounce<Value>(value: Value, delay?: number): Value {
  const [debouncedValue, setDebouncedValue] = useState<Value>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
