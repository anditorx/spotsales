import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Shimmer from 'react-native-shimmer';
import {colors, IMG_NO_AVA} from '../../../res';

const Header = ({...props}) => {
  if (props?.shimmer) {
    return (
      <View style={styles.wrapper}>
        <View>
          <Shimmer style={styles.shimmerText} autoRun={true} visible={false}>
            <Text style={styles.txtTitle}></Text>
          </Shimmer>
          <Shimmer style={styles.shimmerText2} autoRun={true} visible={false}>
            <Text style={styles.txt2}></Text>
          </Shimmer>
          <Shimmer style={styles.shimmerText3} autoRun={true} visible={false}>
            <View style={styles.viewTxtTarget}>
              <Text></Text>
              <Text style={styles.txtTarget}> </Text>
            </View>
          </Shimmer>
        </View>
        <Shimmer autoRun={true} visible={false}>
          <View style={styles.shimmerImg}></View>
        </Shimmer>
      </View>
    );
  }

  if (props?.type === 'header-summary') {
    return (
      <View style={styles.wrapperHeaderSummary}>
        <View>
          <Text style={{fontSize: 14, color: 'black'}}>Summary:</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
            {props?.sellout}
          </Text>
          <Text style={{fontSize: 14, color: 'black'}}>
            Target Store:{' '}
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {props?.target_store}
            </Text>
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={props?.avatar ? props?.avatar : IMG_NO_AVA}
            style={{height: 50, width: 50, borderRadius: 50 / 2}}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    elevation: 1,
  },
  shimmerText: {
    backgroundColor: colors.grey2,
    width: 85,
    height: 20,
    marginBottom: 2,
  },
  shimmerText2: {
    backgroundColor: colors.grey2,
    width: 130,
    height: 20,
    marginBottom: 2,
  },
  shimmerText3: {
    backgroundColor: colors.grey2,
    width: 170,
    height: 20,
    marginBottom: 2,
  },
  shimmerImg: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.grey2,
  },
  wrapperHeaderSummary: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
