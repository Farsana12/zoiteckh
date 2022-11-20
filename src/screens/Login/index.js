import moment from 'moment/moment';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
  Alert,
  BackHandler
} from 'react-native';
import {image_bg,google} from '../../../assets/images';
import {Spacer} from '../../components';
import { appColors } from '../../Theme/colors';
import styles from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValid, setCheckValid] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [submit, setSubmit]= useState(false)

  const today =  moment(new Date ()).format('MM/DD/YYYY')
  const date18YrsAgo = new Date();
   const age = date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);

  


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
    /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    setPassword(text);
    if (password_regex.test(text) ) {
     
      setCheckValidPassword(false);
        }   
         else {
      setCheckValidPassword(true);
    }
  };

  const checkAge = (text) =>{
 if (today - new Date(setPassword(text))){
  console.warn('success');
 }
 else{
  console.warn('failes')
 }
  

}
  const handleSubmit = () => {
   navigation.navigate('Welcome');}  
  
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
          placeholder="MM/DD/YYYY"
          placeholderTextColor={appColors.GRAY_SUBTEXT}
          onChangeText={handlePassword}
          value={password}
        />
        {checkValidPassword ? (
          <Text style={styles.error}>{'Password must be your DOB'}</Text>
        ) : (
          <Text style={styles.error}>{''}</Text>
        )}
        <Spacer height={30}/>
       
         {
          email == '' || password == '' || checkValid == true || checkValidPassword == true ? (
            <TouchableOpacity style={styles.login_inactive}>
            <Text style={styles.btntxt}>{'Login'}</Text>
          </TouchableOpacity>
          ) :(
            <TouchableOpacity style={styles.login_active} onPress={handleSubmit}>
            <Text style={styles.btntxt}>{'Login'}</Text>
          </TouchableOpacity>
          )
         }
       <Spacer height={100}/>
       <Image source={google}
       style={{alignSelf:'center'}}/>
       <Text style={styles.subText2}>{'Copyright Stream LLC 2022'}</Text>
       <Text style={styles.subText2}>{'All Rights Reserved'}</Text>
      </ScrollView>
    </View>
  );
}
