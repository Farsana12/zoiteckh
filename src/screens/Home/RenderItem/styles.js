import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  _main: {
    // flex: 1 / 2,
    height: 200,
    width: "50%"
  },
  _subView1: {
    marginHorizontal: 15,
   // backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    flex: 1,
  },
  _image: {
    flex: 1,
    // height: "100%",
    // width: "100%"
  },
  _item_image: {
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    width: '100%',
  },
  _favIcon: { position: 'absolute', top: -2, right: -2 },
  _subView2: {
    flexDirection: 'row',
    // flex: 1,
    // backgroundColor: "blue",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  _item_name: { fontFamily:'bold', color:'black', flex: 1 },
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
