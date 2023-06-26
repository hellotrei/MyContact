import React, {useMemo} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {Container, Typography} from '../styles';
import {imageValidator} from '../../utils/validator';

export default function PhotoBig({onPress, photo, firstName, lastName}) {
  const isValidImageUrl = imageValidator(photo);
  const windows = useWindowDimensions();
  const photoSize = useMemo(() => {
    return {
      width: windows.width * 0.3,
      height: windows.width * 0.3,
    };
  }, [windows.width]);
  return (
    <View style={styles.photo}>
      <TouchableNativeFeedback testID={'photo-big-button'} onPress={onPress}>
        <View style={[styles.photo]}>
          {photo === 'N/A' ? (
            <View style={[photoSize, styles.emptyPhoto]}>
              <Text style={styles.emptyText}>
                {`${firstName.substring(0, 1)}${lastName.substring(
                  0,
                  1,
                )}`.toUpperCase()}
              </Text>
            </View>
          ) : isValidImageUrl ? (
            <Image style={photoSize} {...photoSize} source={{uri: photo}} />
          ) : (
            <View style={[photoSize, styles.emptyPhoto]}>
              <Text style={styles.emptyText}>
                {`${firstName.substring(0, 1)}${lastName.substring(
                  0,
                  1,
                )}`.toUpperCase()}
              </Text>
            </View>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

PhotoBig.defaultProps = {
  firstName: '',
  lastName: '',
  photo: 'N/A',
};

const styles = StyleSheet.create({
  photo: {
    ...Container.photo,
  },
  emptyPhoto: {
    ...Container.emptyPhoto,
  },
  emptyText: {
    ...Typography.photoBigEmptyText,
  },
});
