import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  _main: {
     flex: 1 ,
    //height: 150,
  //  width: "30%",
//backgroundColor:'red'
  },
  _subView1: {
    marginHorizontal: 15,
   // backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
   // flex: 1,
   justifyContent:'flex-start',
   alignItems:'flex-start',
    flexDirection:'row'
  },
  _image: {
   // flex: 1,
    borderRadius:10,
    alignSelf:'center'
     //height: "100%",
    // width: "100%"
  },
  rect2:{
    height:80,
    width:80,
    backgroundColor:'black',
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center'
  },
  _item_image: {
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    width: '100%',
  },
  _favIcon: { position: 'absolute', top: -2, right: -2 },
  _subView2: {
    flexDirection: 'column',
   marginStart:20,
    // flex: 1,
    // backgroundColor: "blue",
    justifyContent:'center',
    alignContent:'center',
    //alignItems: 'center',
  },
  _item_name: { fontFamily:'bold', color:'black', //flex: 1 
},
  _category: {
    //fontFamily: fontFamily.Regular,
    color: 'gray',
    fontSize: 15,
  },
 
  _currentRate: {
   // fontFamily: fontFamily.Medium,
    color: 'black',
  },
});
export default styles;
