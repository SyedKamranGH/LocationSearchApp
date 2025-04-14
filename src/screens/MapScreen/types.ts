/**
 * Props interface for the HistoryToggleButton component.
 *
 * @interface HistoryToggleButtonProps
 * @property {boolean} showHistory - Whether the history list is currently visible
 * @property {Function} onToggle - Callback function to toggle the history visibility
 */
export interface HistoryToggleButtonProps {
  showHistory: boolean;
  onToggle: () => void;
}
