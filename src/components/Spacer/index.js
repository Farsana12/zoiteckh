import React from 'react';
import {View} from 'react-native';
export default function ({
  show = true,
  height = 1,
  width = 1,
  backgroundColor,
  containerStyle = {},
}) {
  if (show)
    return <View style={[{height, width, backgroundColor}, containerStyle]} />;
  else return null;
}
