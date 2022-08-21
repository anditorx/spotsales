import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Shimmer from 'react-native-shimmer';
import {colors, IC_ArrowNextGrey} from '../../../res';
import {Gap, Separator} from '../../atoms';

const List = ({icon, title, desc, desc2, onPress, shimmer}) => {
  if (shimmer) {
    return (
      <>
        <View style={styles.wrapper}>
          <Shimmer autoRun={true} visible={false}>
            <View style={styles.shimmerImg}></View>
          </Shimmer>
          <View style={styles.viewText}>
            <Shimmer autoRun={true} visible={false}>
              <View style={styles.shimmerText}></View>
            </Shimmer>
            <Gap height={2} />
            <Shimmer autoRun={true} visible={false}>
              <View style={styles.shimmerText2}></View>
            </Shimmer>
          </View>
        </View>
        <Gap height={10} />
      </>
    );
  }

  return (
    <>
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        {/* <IconUserCircleSVG /> */}
        <Image source={icon} style={styles.img} />
        <View style={styles.viewText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <Text style={styles.desc}>{desc2}</Text>
        </View>
        <IC_ArrowNextGrey />
      </TouchableOpacity>
      <Separator />
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  img: {
    height: 25,
    width: 25,
  },
  viewText: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 17,
    color: colors.black,
  },
  desc: {
    fontSize: 15,
    color: colors.grey2,
  },
  shimmerImg: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
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
