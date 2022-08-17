import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMG_NO_AVA} from '../../../res';

const Header = ({...props}) => {
  if (props?.type === 'header-summary') {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
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

const styles = StyleSheet.create({});
