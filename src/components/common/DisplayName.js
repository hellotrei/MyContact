import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Spacing, Typography} from '../styles';

export default function DisplayName({firstName}) {
  return <Text key={'name'} style={styles.name}>{`${firstName}`}</Text>;
}

const styles = StyleSheet.create({
  name: {
    ...Typography.contactTitle,
    marginHorizontal: Spacing.base,
  },
});
