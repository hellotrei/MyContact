import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Container} from '../styles';

export default function BackButton({onPress}) {
  return (
    <View style={styles.backButton}>
      <TouchableNativeFeedback testID={'back-button'} onPress={onPress}>
        <View style={styles.button}>
          <Icon name={'chevron-left'} size={24} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    ...Container.baseRounded,
  },
  button: {
    ...Container.backButtonDimension,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
