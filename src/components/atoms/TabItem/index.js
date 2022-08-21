import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
  colors,
  IC_Home,
  IC_HomeActive,
  IC_Profile,
  IC_ProfileActive,
  IC_Report,
  IC_ReportActive,
} from '../../../res';

const TabItem = ({...props}) => {
  const Icon = () => {
    if (props?.title === 'Beranda') {
      return props?.active ? <IC_HomeActive /> : <IC_Home />;
    }
    if (props?.title === 'Laporan') {
      return props?.active ? <IC_ReportActive /> : <IC_Report />;
    }
    if (props?.title === 'Akun') {
      return props?.active ? <IC_ProfileActive /> : <IC_Profile />;
    }
    return <IC_Home />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props?.onPress}
      onLongPress={props?.onLongPress}>
      <Icon />
      <Text style={styles.txtTitle(props?.active)}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: active => ({
    color: active ? colors.primary : colors.grey2,
    fontSize: 17,
    marginTop: 5,
  }),
  midMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 70,
    width: 70,
    top: -30,
    borderRadius: 70 / 2,
    position: 'absolute',
    borderWidth: 3,
    borderColor: colors.primary,
    marginBottom: 10,
  },
});
