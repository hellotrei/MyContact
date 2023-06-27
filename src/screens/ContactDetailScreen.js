import React, {useMemo, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BackButton from '../components/common/BackButton';
import DangerButton from '../components/common/DangerButton';
import DisplayName from '../components/common/DisplayName';
import HeaderBar from '../components/common/HeaderBar';
import NormalButton from '../components/common/NormalButton';
import PhotoBig from '../components/common/PhotoBig';
import * as ContactActions from '../stores/actions/contact';
import {Api} from '../services';
import {Spacing, Typography} from '../components/styles';
import Utils from '../utils';
import ContactInfo from '../components/common/ContactInfo';

export default function ContactDetailScreen({navigation, route}) {
  const dispatch = useDispatch();

  const _id = route.params?.id;
  const contactList = useSelector((state) => state.contact.data);

  const contactDetail = useMemo(() => {
    const _detail = contactList.find((value) => value.id === _id) || {};

    return {
      id: _id,
      photo: _detail.photo,
      firstName: _detail.firstName,
      lastName: _detail.lastName,
      age: _detail.age,
    };
  }, [_id, contactList]);

  function _handleBackButton() {
    navigation.goBack();
  }

  const [isLoading, setIsLoading] = useState(false);

  async function deleteContact() {
    setIsLoading(true);
    try {
      await Api.deleteContact(_id);
      setIsLoading(false);
      dispatch(ContactActions.deleteContact({id: _id}));
      navigation.goBack();
    } catch (error) {
      setIsLoading(false);
      Utils.SmallMessage.showError();
    }
  }

  function _handlePressDelete() {
    Alert.alert('Hapus Kontak', 'Kontak ini akan dihapus', [
      {
        text: 'BATAL',
      },
      {
        text: 'HAPUS',
        onPress: deleteContact,
      },
    ]);
  }

  function _handlePressEdit() {
    navigation.navigate('ContactUpdate', {
      actionStatus: 'EDIT',
      contactDetail: contactDetail,
    });
  }

  return (
    <View>
      <HeaderBar isLoading={isLoading} loadingMessage={'Menghapus kontak...'}>
        <BackButton onPress={_handleBackButton} />
      </HeaderBar>
      <View style={styles.photoButtonView}>
        <PhotoBig
          photo={contactDetail.photo}
          firstName={contactDetail.firstName}
          lastName={contactDetail.lastName}
        />
      </View>
      <View style={styles.contentContainer}>
        <DisplayName firstName={contactDetail.firstName} />
      </View>
      <View style={styles.buttonContainer}>
        <ContactInfo
          firstName={contactDetail.firstName}
          lastName={contactDetail.lastName}
          age={contactDetail.age}
        />
        <NormalButton
          disabled={isLoading === true}
          style={styles.button}
          text={'Ubah kontak'}
          onPress={_handlePressEdit}
        />
        <DangerButton
          disabled={isLoading === true}
          style={styles.button}
          text={'Hapus kontak'}
          onPress={_handlePressDelete}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: Spacing.base,
    alignItems: 'center',
  },
  photoButtonView: {
    marginBottom: Spacing.base,
    alignItems: 'center',
  },

  age: {
    ...Typography.contactSubtitle,
    marginHorizontal: Spacing.base,
  },
  buttonContainer: {
    marginTop: Spacing.smaller,
  },
  button: {
    marginHorizontal: Spacing.base,
    marginVertical: Spacing.smaller,
  },
});
