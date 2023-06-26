import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Container, Typography} from '../styles';
import {imageValidator} from '../../utils/validator';

export default function PhotoSmall({photo, firstName, lastName, style}) {
  const isValidImageUrl = imageValidator(photo);

  return (
    <View style={[style]}>
      {photo === 'N/A' ? (
        <View style={[styles.emptyPhoto]}>
          <Text style={styles.emptyText}>
            {`${firstName.substring(0, 1)}${lastName.substring(
              0,
              1,
            )}`.toUpperCase()}
          </Text>
        </View>
      ) : isValidImageUrl ? (
        <Image
          style={styles.photo}
          source={{uri: photo}}
          width={40}
          height={40}
        />
      ) : (
        <View style={[styles.emptyPhoto]}>
          <Text style={styles.emptyText}>
            {`${firstName.substring(0, 1)}${lastName.substring(
              0,
              1,
            )}`.toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
}

PhotoSmall.defaultProps = {
  firstName: '',
  lastName: '',
  photo: 'N/A',
};

const styles = StyleSheet.create({
  photo: {
    ...Container.photoSmallDimension,
  },
  emptyPhoto: {
    ...Container.photoSmallDimension,
    ...Container.emptyPhoto,
  },
  emptyText: {
    ...Typography.photoSmallEmptyText,
  },
});
