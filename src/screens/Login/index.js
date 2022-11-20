import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import {image_bg} from '../../../assets/images';
import {Spacer} from '../../components';
import { appColors } from '../../Theme/colors';
import styles from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValid, setCheckValid] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);

  const handleCheckEmail = text => {
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phone_regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\-]\d{3}[\-]\d{4}$/;

    setEmail(text);

    if (email_regex.test(text) || phone_regex.test(text)) {
      setCheckValid(false);
    } else {
      setCheckValid(true);
    }
  };
  const handlePassword = text => {
    const password_regex =
      /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
    setPassword(text);
    if (password_regex.test(text)) {setCheckValidPassword(false);
        }   
         else {
      setCheckValidPassword(true);
    }
  };
  const handleSubmit = (text) => {
    
    if ((handleCheckEmail && handlePassword) === true ) {
      navigation.navigate('Welcome');
    } else {
      ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
      
    }
  };
  return (
    <View style={styles._main}>
      <ScrollView>
        <Spacer height={50} />
        <Image source={image_bg} style={styles.img} />
        <Spacer height={20} />
        <Text style={styles.welcome}>{'Welcome to Cloud!'}</Text>
        <Spacer height={20} />
        <Text style={styles.subText}>{'Lorem epsum doler sit amet'}</Text>
        <Text style={styles.subText}>{'Lorem epsum doler'}</Text>
        <Spacer height={70} />
        <Text style={styles.login}>{'Login to continue!'}</Text>
        <Spacer height={30} />
        <Text style={styles.input_head}>{'Email / Phone '}</Text>
        <TextInput
          style={styles.txt_input}
          placeholder="Email/Phone"
          keyboardType="email-address"
          value={email}
          onChangeText={handleCheckEmail}
          placeholderTextColor={appColors.GRAY_SUBTEXT}
        />
        {checkValid ? (
          <Text style={styles.error}>{'Invalid Email / Phone no'}</Text>
        ) : (
          <Text style={styles.error}>{''}</Text>
        )}
        <Spacer height={10} />
        <Text style={styles.input_head}>{'Password'}</Text>
        <TextInput
          style={styles.txt_input}
          placeholder="Password"
          placeholderTextColor={appColors.GRAY_SUBTEXT}
          onChangeText={handlePassword}
          value={password}
        />
        {checkValidPassword ? (
          <Text style={styles.error}>{'Password must be your DOB'}</Text>
        ) : (
          <Text style={styles.error}>{''}</Text>
        )}
        <View style={{height: 30}} />
       
          <TouchableOpacity style={styles.login_active} onPress={handleSubmit}>
            <Text style={styles.btntxt}>{'Login'}</Text>
          </TouchableOpacity>
       
      </ScrollView>
    </View>
  );
}
