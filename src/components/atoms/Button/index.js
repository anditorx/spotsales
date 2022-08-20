import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../res';

const Button = ({...props}) => {
  if (props?.type === 'btn-absen') {
    return (
      <TouchableOpacity style={styles.btnAbsen} onPress={props?.onPress}>
        <Text style={styles.txtBtnAbsen}>{props?.text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.btn(props?.disable)}
      onPress={props?.onPress}>
      <Text style={styles.txt(props?.disable)}>{props?.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: disable => ({
    height: 50,
    backgroundColor: disable ? colors.grey3 : colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
  }),
  txt: disable => ({
    color: disable ? colors.grey1 : colors.white,
    fontSize: 18,
  }),
  btnAbsen: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
  },
  txtBtnAbsen: {
    color: colors.white,
    fontSize: 16,
  },
  shimmerText: {
    backgroundColor: colors.grey2,
    width: 80,
    height: 50,
    marginBottom: 2,
    borderRadius: 10,
  },
});
