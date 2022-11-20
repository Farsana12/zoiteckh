import { StyleSheet } from 'react-native';
import { fontFamily } from '../../Theme/fontFamily';
import { fontSize } from '../../Theme/fontSize';
import { appColors } from '../../Theme/colors';

const styles = StyleSheet.create({
  _main: {
     flex: 1 ,
  },
  img:{alignSelf: 'center', width: 100, height: 100},
welcome:{
    alignSelf: 'center',
    color: appColors.SKY_BLUE,
    fontSize: 23,
    fontWeight: 'bold',
  },
  btn:{
    backgroundColor: '#10aafe',
    width: '20%',
    //height: '20%',
    paddingVertical: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bottomTxt:{
    alignSelf: 'center',
    //  marginStart: 20,
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
export default styles;
