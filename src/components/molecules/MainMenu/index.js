import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  colors,
  IMG_DAILY_REPORT,
  IMG_PROGRAM,
  IMG_STOCKCARD,
} from '../../../res';

const MainMenu = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.wrapperBox}>
          <Image source={IMG_DAILY_REPORT} style={styles.imgLaporanHarian} />
          <Text style={styles.textBox}>Laporan Harian</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBox}>
          <Image source={IMG_STOCKCARD} style={styles.imgStockcard} />
          <Text style={styles.txt}>StockCard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBox}>
          <Image source={IMG_PROGRAM} style={styles.imgProgram} />
          <Text style={styles.txt}>Program</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    padding: 16,
    flexDirection: 'row',
    flex: 1,
  },
  wrapperBox: {
    backgroundColor: colors.primary,
    height: 130,
    width: 130,
    borderRadius: 10,
    paddingBottom: 10,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  imgLaporanHarian: {
    position: 'absolute',
    height: 150,
    width: 150,
    top: -55,
    right: -50,
  },
  imgStockcard: {
    position: 'absolute',
    height: 100,
    width: 100,
    top: -30,
    right: -10,
  },
  imgProgram: {
    position: 'absolute',
    height: 100,
    width: 100,
    top: -30,
    right: -10,
  },
  textBox: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    marginTop: 50,
    paddingHorizontal: 5,
  },
  txt: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    marginTop: 60,
  },
});
