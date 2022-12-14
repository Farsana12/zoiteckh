import { StyleSheet } from 'react-native';
import { fontFamily } from '../../Theme/fontFamily';
import { fontSize } from '../../Theme/fontSize';
import { appColors } from '../../Theme/colors';

const styles = StyleSheet.create({
  _main: {
     flex: 1 ,
  },
  img:
    {alignSelf:'center',width:50,height:50},
  welcome:{
    alignSelf: 'center',
    color: appColors.SKY_BLUE,
    fontSize: fontSize.HEAD_24,
    fontFamily:fontFamily.OBJ_REGULAR,
  },
  subText:{alignSelf: 'center', color:appColors.BLACK, fontSize: fontSize.SUB_HEAD_15,fontFamily:fontFamily.OBJ_REGULAR},
  subText2:{alignSelf: 'center', color:appColors.BORDER_GRAY, fontSize: fontSize.NORMAL_13,fontFamily:fontFamily.OBJ_REGULAR},
login:{
    alignSelf: 'flex-start',
    marginStart: 20,
    color: '#10aafe',
    fontSize: 22,
    fontFamily:fontFamily.OBJ_REGULAR,
    //fontWeight: 'bold',
  },
  input_head:{
    alignSelf: 'flex-start',
    marginStart: 20,
    color: '#10aafe',
    fontSize: 15,
   // fontWeight: 'bold',
    fontFamily:fontFamily.OBJ_REGULAR
  },
  txt_input:{
    height: 40,
    width: '90%',
    margin: 12,
    alignSelf: 'center',
    borderBottomWidth: 1,
    //padding: 10,
    borderColor: '#10aafe',
  },
  error:{
    color: 'red',
    fontSize: 13,
    textAlign: 'left',
    marginStart: 20,
  },
  login_active:{
    backgroundColor: '#10aafe',
    width: '40%',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  login_inactive:{
    backgroundColor: 'gray',
    width: '40%',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btntxt:{
    color: 'white', fontSize: 20,
    fontFamily:fontFamily.OBJ_REGULAR

  }

});
export default styles;
