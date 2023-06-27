import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback} from 'react-native';
import {Container, Spacing, Colors} from '../styles';
import Icon from 'react-native-vector-icons/Feather';

export default function ActionAddContact({onPress}) {
  return (
    <View style={styles.actionAddContact}>
      <TouchableNativeFeedback
        testID={'action-add-contact-button'}
        onPress={onPress}>
        <View style={styles.actionAddContactButton}>
          <Icon key={'icon'} name={'plus'} size={24} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  actionAddContact: {
    ...Container.baseRounded,
    overflow: 'hidden',
  },
  actionAddContactButton: {
    ...Container.baseRounded,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.small,
    backgroundColor: Colors.primary,
  },
});
