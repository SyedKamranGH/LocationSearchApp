import React from 'react';
import { Text } from 'react-native';
import { EmptyListProps } from './types';
import styles from './styles';

const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
  return <Text style={styles.emptyText}>{message}</Text>;
};

export default EmptyList;
