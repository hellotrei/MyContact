import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Spacing, Typography, Colors} from '../styles';

export default function ContactInfo({firstName, lastName, age}) {
  return (
    <View style={styles.informationContainer}>
      <Text style={styles.informationTitle}>Info Kontak</Text>
      <View style={styles.subSection}>
        <Text style={styles.informationSubtitle}>Nama Depan</Text>
        <Text style={styles.informationSubtitle}>{firstName}</Text>
      </View>
      <View style={styles.subSection}>
        <Text style={styles.informationSubtitle}>Nama Belakang</Text>
        <Text style={styles.informationSubtitle}>{lastName}</Text>
      </View>
      <View style={styles.subSection}>
        <Text style={styles.informationSubtitle}>Umur</Text>
        <Text style={styles.informationSubtitle}>{age}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  informationContainer: {
    padding: Spacing.base,
    marginHorizontal: Spacing.base,
    marginVertical: Spacing.smallest,
    backgroundColor: Colors.whiteBone,
    borderRadius: 8,
  },
  informationTitle: {
    ...Typography.contactSubtitle,
  },
  informationSubtitle: {
    ...Typography.cardSubtitle,
  },
  subSection: {
    marginVertical: Spacing.smallest,
    paddingVertical: Spacing.smallest,
  },
});
