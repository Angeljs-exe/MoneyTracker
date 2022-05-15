import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Frame, IconBack, Ic_home} from '../../../assets';
import {Gap} from '../../atoms';

const Header = ({title, onBack, title2, buttomtap1, buttomtap2}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      {buttomtap1 && (
        <TouchableOpacity onPress={buttomtap1} activeOpacity={0.7}>
          <View style={styles.buttomtap}>
            <Ic_home />
          </View>
        </TouchableOpacity>
      )}
      {buttomtap2 && (
        <TouchableOpacity onPress={buttomtap2} activeOpacity={0.7}>
          <View style={styles.buttomtap2}>
            <Frame />
          </View>
        </TouchableOpacity>
      )}
      <Gap width={26} />
      <Text style={styles.text}>{title} </Text>
      <Text style={styles.text2}>{title2}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    top: 30,
    right: 170,
  },
  back: {
    padding: 10,
  },
  line: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttomtap: {
    backgroundColor: 'white',
    left: 82,
  },
  buttomtap2: {
    backgroundColor: 'white',
    left: 243,
  },
});
