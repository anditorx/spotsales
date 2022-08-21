import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, IC_Key, IC_UserCircle, IMG_LOGIN} from '../../res';
import {Button, Gap, Input} from '../../components';
import {useForm} from '../../utils';

const Login = ({navigation}) => {
  const [secureText, setSecureText] = useState(true);
  // state form
  const [form, setForm] = useForm({
    user_spg: '',
    password_spg: '',
  });
  const showPassword = () => {
    setSecureText(!secureText);
  };

  const onPressLogin = () => {
    navigation.navigate('MainTab');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrappingImg}>
          <Image source={IMG_LOGIN} style={styles.image} />
        </View>
        <View style={styles.wrappingForm}>
          <Text style={styles.titleLogin}>Login</Text>
          <Input
            type={'input-icon'}
            icon={IC_UserCircle}
            placeholder={'User ID'}
            value={form.user_spg}
            onChangeText={value => setForm('user_spg', value)}
          />
          <Gap height={10} />
          <Input
            type={'input-icon-password'}
            icon={IC_Key}
            placeholder={'Password'}
            value={form.password_spg}
            onChangeText={value => setForm('password_spg', value)}
            secureTextEntry={secureText}
            onPress={showPassword}
          />
          <Gap height={35} />
          <Button text={'Masuk'} onPress={onPressLogin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {height: 200, width: 200, resizeMode: 'contain'},
  wrappingImg: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrappingForm: {padding: 20},
  titleLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
});
