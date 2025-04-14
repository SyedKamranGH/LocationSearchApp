import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles';

/**
 * Button component to toggle the visibility of the history list.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.showHistory - Whether the history list is currently visible
 * @param {Function} props.onToggle - Callback function to toggle the history visibility
 * @returns {React.ReactElement} The rendered HistoryToggleButton component
 */
const HistoryToggleButton = ({ showHistory, onToggle }) => {
  return (
    <Pressable style={styles.historyButton} onPress={onToggle}>
      <Text style={styles.historyButtonText}>
        {showHistory ? 'Hide History' : 'Show History'}
      </Text>
    </Pressable>
  );
};

export default React.memo(HistoryToggleButton);
