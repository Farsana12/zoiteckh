import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import {welcome} from '../../../assets/images';
import {Header, Spacer} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {appColors} from '../../Theme/colors';
export default function Welcome({navigation}) {
  return (
    <View style={styles._main}>
      <ScrollView>
        <Header
          labelCenter="Welcome User!"
          goBack={() => navigation.goBack()}
          labelStyle={{alignSelf: 'flex-start', left: 60}}
        />
        <Spacer height={50} />
        <Image source={welcome} style={styles.img} />
        <Spacer height={10} />
        <Text style={styles.welcome}>{'Welcome to Cloud!!'}</Text>
        <Spacer height={250} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <AntDesign name={'plus'} size={20} color={appColors.WHITE} />
        </TouchableOpacity>
        <View style={{height: 10}} />
        <Text style={styles.bottomTxt}>{'The catogeries and item!'}</Text>
      </ScrollView>
    </View>
  );
}
