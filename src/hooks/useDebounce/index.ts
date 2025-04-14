import { useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';
import { UseDebounceOptions } from './types';

/**
 * Custom hook that returns a debounced version of the provided function.
 * Created for handling task
 *
 * @function useDebounce
 * @template T - The function type
 * @param {T} callback - The function to debounce
 * @param {UseDebounceOptions} options - Debounce options
 * @param {number} options.delay - The delay in milliseconds
 * @param {number} [options.maxWait] - The maximum time to wait
 * @returns {Function} The debounced function
 */

function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  options: UseDebounceOptions,
) {
  const { delay, maxWait } = options;

  // Initialize the ref with null
  const debouncedFn = useRef<ReturnType<typeof debounce> | null>(null);

  // Create or update the debounced function when dependencies change
  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (!debouncedFn.current) {
        debouncedFn.current = debounce(callback, delay, { maxWait });
      }

      // Make sure to handle potential null
      return debouncedFn.current ? debouncedFn.current(...args) : undefined;
    },
    [callback, delay, maxWait],
  );

  return debouncedCallback;
}

export default useDebounce;
