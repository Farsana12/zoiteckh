import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {play} from '../../../../assets/images';
import { Spacer } from '../../../components';

export default function ({
  show = true,
  onPress,
  itemName,
  image,
  category,
  video = true,
}) {
  //const [video, setVideo] = useState(true)
  if (show)
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles._main}
        onPress={onPress}>
        <View style={styles._subView1}>
          <ImageBackground
            source={image}
            style={styles._image}
            resizeMode="stretch">
            {video ? (
              <Image
                source={play}
                style={{position: 'absolute', bottom: 8, left: 8}}
              />
            ) : null}
          </ImageBackground>
          <Spacer height={10}/>
          <View style={styles._subView2}>
            <Text style={styles._item_name}>{itemName}</Text>
          </View>
          <Text style={styles._category}>{category}</Text>
        </View>
      </TouchableOpacity>
    );
  else return null;
}
