import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, List, UploadPhoto} from '../../components';
import {
  colors,
  IC_HelpCenter,
  IC_Logout,
  IC_UserCircle,
  IMG_NO_AVA,
} from '../../res';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Akun'}
        type="btn-back"
        onPress={() => navigation.replace('MainTab')}
      />
      <ScrollView
        style={{padding: 20, marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <UploadPhoto
          shimmer={false}
          img={IMG_NO_AVA}
          name="Andi Rustianto"
          user_spg="001"
          area="Jakarta"
        />
        <Gap height={35} />
        <List
          icon={IC_UserCircle}
          title={'Ubah Profile'}
          desc={'Ubah foto dan ubah password'}
          shimmer={false}
        />
        <List
          icon={IC_HelpCenter}
          title={'Laporan Absensi'}
          desc={'Cek laporan absen Anda'}
          shimmer={false}
        />
        <List
          icon={IC_Logout}
          title={'Keluar'}
          desc={'Keluar dari aplikasi'}
          shimmer={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
