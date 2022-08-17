import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Gap = ({...props}) => {
  return <View style={{height: props?.height, width: props?.width}} />;
};

export default Gap;

const styles = StyleSheet.create({});
