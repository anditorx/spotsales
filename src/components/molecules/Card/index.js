import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Button, Gap} from '../../atoms';
import Shimmer from 'react-native-shimmer';
import {colors, IMG_BG_CARD} from '../../../res';

const Card = ({...props}) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);

  if (props?.shimmer) {
    return (
      <View style={styles.wrapper}>
        <Shimmer autoRun={true} visible={false}>
          <View style={styles.shimmerCard}></View>
        </Shimmer>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={IMG_BG_CARD} style={styles.imgCard}>
        <View style={styles.listCard}>
          <View style={styles.dataUser}>
            <Text style={styles.txtName}>{props?.name}</Text>
            <Text style={styles.txt2}>
              {props?.nama_toko} - {props?.area}
            </Text>
            <Text style={styles.txt2}>{props?.user_spg}</Text>
          </View>
          <Gap height={10} />
          <View style={styles.viewAbsen}>
            <View>
              <Text style={styles.txt2}>Note:</Text>
              <Text style={styles.txt2}>"Anda belum absen masuk"</Text>
            </View>
            <Button
              text={'Absen Masuk'}
              type={'btn-absen'}
              onPress={props?.onPressAbsen}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  imgCard: {
    height: 165,
    width: '100%',
    borderRadius: 5,
  },
  imgCardTL: {
    height: 100,
    width: '100%',
    borderRadius: 5,
  },
  listCard: {
    justifyContent: 'space-between',
  },
  dataUser: {
    padding: 10,
    justifyContent: 'flex-start',
  },
  txtName: {
    color: colors.white,
    fontSize: 20,
    // fontFamily: 'Rambla-Regular',
  },
  txt2: {
    color: colors.white,
    // fontFamily: 'Rambla-Regular',
  },
  viewAbsen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  shimmerCard: {
    height: 150,
    width: '100%',
    borderRadius: 6,
    backgroundColor: colors.grey2,
  },
});
