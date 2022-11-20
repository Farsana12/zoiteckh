import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {play} from '../../../../assets/images';
import styles from './styles';

export default function ({
  show = true,
  onPress,
  itemName,
  image,
  category,
  video = true,
}) {
  if (show)
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles._main}
        onPress={onPress}>
        <View style={styles._subView1}>
          <View style={styles.rect2}>
            {video ? (
              <Image source={play} style={styles._image} resizeMode="contain" />
            ) : null}
          </View>
          <View style={styles._subView2}>
            <Text style={styles._item_name}>{itemName}</Text>
            <Text style={styles._category}>{category}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  else return null;
}
