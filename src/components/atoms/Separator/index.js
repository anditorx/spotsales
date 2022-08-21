import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../res';

const Separator = () => {
  return <View style={styles.wrapper}></View>;
};

export default Separator;

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 0.6,
    borderBottomColor: colors.grey3,
  },
});
