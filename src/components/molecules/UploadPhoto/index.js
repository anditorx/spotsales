import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Shimmer from 'react-native-shimmer';
import {colors, IC_RemoveImg, IMG_ADD_PHOTO} from '../../../res';
import {Gap} from '../../atoms';

const UploaPhoto = ({
  type,
  onPress,
  hasPhoto,
  img,
  shimmer,
  name,
  user_spg,
  area,
}) => {
  // const [photo, setPhoto] = useState(ImgNoAva2);

  if (type === 'add-photo') {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={onPress}
        hasPhoto={hasPhoto}>
        <Image source={img} style={styles.photo} />
        <View>
          {hasPhoto && <Image source={IC_RemoveImg} style={styles.addPhoto} />}
          {!hasPhoto && (
            <Image source={IMG_ADD_PHOTO} style={styles.addPhoto} />
          )}
        </View>
      </TouchableOpacity>
    );
  }

  if (type === 'add-img') {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={onPress}
        hasPhoto={hasPhoto}>
        <Image source={img} style={styles.img} />
        <View>
          {hasPhoto && <Image source={IC_RemoveImg} style={styles.addImg} />}
          {!hasPhoto && <Image source={IMG_ADD_PHOTO} style={styles.addImg} />}
        </View>
      </TouchableOpacity>
    );
  }

  if (type === 'add-img-2') {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={onPress}
        hasPhoto={hasPhoto}>
        <Image source={img} style={styles.img2} />
        <View>
          {hasPhoto && <Image source={IC_RemoveImg} style={styles.addImg2} />}
          {!hasPhoto && <Image source={IMG_ADD_PHOTO} style={styles.addImg2} />}
        </View>
      </TouchableOpacity>
    );
  }

  if (type === 'add-img-2-prev-1') {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={onPress}
        hasPhoto={hasPhoto}>
        <Image source={img} style={styles.img2} />
      </TouchableOpacity>
    );
  }

  if (shimmer) {
    return (
      <View style={styles.wrapper}>
        <Shimmer autoRun={true} visible={false}>
          <View style={styles.shimmerImg}></View>
        </Shimmer>
        <Gap height={10} />
        <Shimmer autoRun={true} visible={false}>
          <Text style={styles.shimmerText}></Text>
        </Shimmer>
        <Gap height={3} />
        <Shimmer autoRun={true} visible={false}>
          <Text style={styles.shimmerText2}></Text>
        </Shimmer>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Image source={img} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>
        {user_spg} - {area}
      </Text>
    </View>
  );
};

export default UploaPhoto;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    borderWidth: 8,
    borderColor: colors.white,
  },
  img: {
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
    borderWidth: 8,
    borderColor: colors.white,
  },
  img2: {
    height: 250,
    width: 250,
    borderRadius: 20,
    borderWidth: 8,
    borderColor: colors.white,
  },
  addImg: {
    position: 'absolute',
    height: 70,
    width: 70,
    right: -145,
    bottom: 50,
  },
  addImg2: {
    position: 'absolute',
    height: 70,
    width: 70,
    right: -135,
    bottom: 0,
  },
  addPhoto: {
    position: 'absolute',
    height: 50,
    width: 50,
    right: -80,
    bottom: 10,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: colors.black,
  },
  desc: {
    fontSize: 15,
    color: colors.black,
  },
  shimmerImg: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    backgroundColor: colors.grey2,
  },
  shimmerText: {
    backgroundColor: colors.grey2,
    width: 100,
    height: 20,
    marginBottom: 2,
  },
  shimmerText2: {
    backgroundColor: colors.grey2,
    width: 170,
    height: 20,
    marginBottom: 2,
  },
});
