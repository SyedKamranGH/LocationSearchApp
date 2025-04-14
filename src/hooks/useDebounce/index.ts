import { useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';
import { UseDebounceOptions } from './types';

function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  options: UseDebounceOptions,
) {
  const { delay, maxWait } = options;

  const debouncedFn = useRef<ReturnType<typeof debounce> | null>(null);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (!debouncedFn.current) {
        debouncedFn.current = debounce(callback, delay, { maxWait });
      }

      return debouncedFn.current ? debouncedFn.current(...args) : undefined;
    },
    [callback, delay, maxWait],
  );

  return debouncedCallback;
}

export default useDebounce;
