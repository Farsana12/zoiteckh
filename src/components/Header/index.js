import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ({
  show = true,
  labelCenter,
  goBack,
  settings,
  active,
  toggle = true,
  containerStyle,
  backgroundColor = '#10AAFE',
  backArrowStyle,
  labelStyle,onPress
}) {
  if (show)
    return ( <View style={[styles._mode2container, {backgroundColor}, containerStyle]}>
    {labelCenter && <Text style={[styles._mode2Text1,labelStyle]}>{labelCenter}</Text>}
    {goBack && (
      <AntDesign
        style={[styles._mode2headerIcon, backArrowStyle]}
        name="left"
        onPress={goBack}
      />
   )}
     {toggle ? (
      <AntDesign
        style={[styles._mode2headerIcon2, backArrowStyle]}
        name="setting"
     //   onPress={toggle}
      />
   ):(<AntDesign
    style={[styles._mode2headerIcon2, backArrowStyle]}
    name="windows"
    onPress={onPress}
  />)}
  </View>
);
else {
return null;
}
};

