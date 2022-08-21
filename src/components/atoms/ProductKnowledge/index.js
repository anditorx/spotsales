import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Shimmer from 'react-native-shimmer';
import {colors, IMG_PRODUCTKNOWLEDGE} from '../../../res';

const ProductKnowledge = ({...props}) => {
  if (props?.shimmer) {
    return (
      <View style={styles.wrapper}>
        <Shimmer style={styles.shimmerText} autoRun={true} visible={false}>
          <Text style={styles.txt}></Text>
        </Shimmer>
        <Shimmer autoRun={true} visible={false}>
          <View style={styles.shimmerCard}></View>
        </Shimmer>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.txt}>Informasi Produk </Text>
      <TouchableOpacity onPress={props?.onPress}>
        <Image source={IMG_PRODUCTKNOWLEDGE} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductKnowledge;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  img: {
    borderRadius: 5,
    height: 70,
    width: '100%',
    position: 'relative',
    resizeMode: 'stretch',
  },
  txt: {
    color: colors.black,
    fontSize: 16,
    // fontFamily: 'Rambla-Regular',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shimmerText: {
    backgroundColor: colors.grey2,
    width: 150,
    height: 20,
    marginBottom: 2,
  },
  shimmerCard: {
    height: 75,
    width: '100%',
    borderRadius: 6,
    backgroundColor: colors.grey2,
  },
});
