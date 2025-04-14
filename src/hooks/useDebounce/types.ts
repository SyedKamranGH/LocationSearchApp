/**
 * Options for the useDebounce hook.
 *
 * @interface UseDebounceOptions
 * @property {number} delay - The delay in milliseconds
 * @property {number} [maxWait] - The maximum time to wait
 */
export interface UseDebounceOptions {
  delay: number;
  maxWait?: number;
}
