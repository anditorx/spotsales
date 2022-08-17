import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, IC_EyeHide, IC_EyeOn} from '../../../res';

const Input = ({...props}) => {
  const [border, setBorder] = useState(colors.grey2);

  const onFocusForm = () => {
    setBorder(colors.indigo);
  };
  const onBlurFrom = () => {
    setBorder(colors.grey2);
  };

  if (props?.type === 'input-icon') {
    return (
      <View style={styles.wrapper}>
        <Image source={props?.icon} style={styles.icon1} />
        <TextInput
          onFocus={onFocusForm}
          style={styles.input2}
          placeholder={props?.placeholder}
          onBlur={onBlurFrom}
          value={props?.value}
          onChangeText={props?.onChangeText}
          secureTextEntry={props?.secureTextEntry}
          editable={!props?.disable}
          selectTextOnFocus={!props?.disable}
        />
      </View>
    );
  }

  if (props?.type === 'input-icon-password') {
    return (
      <View style={styles.wrapper}>
        <Image source={props?.icon} style={styles.icon1} />
        <TextInput
          onFocus={onFocusForm}
          style={styles.input2}
          placeholder={props?.placeholder}
          onBlur={onBlurFrom}
          value={props?.value}
          onChangeText={props?.onChangeText}
          secureTextEntry={props?.secureTextEntry}
          editable={!props?.disable}
          selectTextOnFocus={!props?.disable}
        />

        <TouchableOpacity onPress={props?.onPress}>
          <Image
            source={props?.secureTextEntry ? IC_EyeHide : IC_EyeOn}
            style={styles.iconPass}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <Text>Input</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey2,
    borderRadius: 10,
    padding: 5,
  },
  icon1: {
    // resizeMode: 'stretch',
    // alignSelf: 'flex-start',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 25,
    width: 25,
  },
  input2: {
    // backgroundColor: 'red',
    flex: 1,
  },
  iconPass: {
    resizeMode: 'contain',
    // alignSelf: 'flex-start',
    padding: 10,
    marginLeft: 10,
    marginRight: 20,
    height: 8,
    width: 11,
  },
  iconPass2: {
    position: 'absolute',
    top: -33,
    right: 20,
    height: 15,
    width: 20,
  },
});
