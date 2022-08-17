import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, IMG_NO_AVA} from '../../res';
import {Header} from '../../components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header summary */}
        <Header
          type="header-summary"
          sellout="Rp0"
          target_store="Rp20.000.000"
        />
        {/* attendance card */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
