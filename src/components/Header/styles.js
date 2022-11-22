import {StyleSheet} from 'react-native';
import {HeaderProperties} from './constants';

const styles = StyleSheet.create({

  /* mode - 2 */
  _mode2container: {
    backgroundColor: HeaderProperties.backgroundColor,
    width: '100%',
    height: HeaderProperties.height,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1
  },
  _mode2Text1: {
    ...HeaderProperties.text_center,
  },
  _mode2headerIcon: {
    position: 'absolute',
    alignSelf: 'flex-start',
    ...HeaderProperties.backArrow,
  },
  _mode2headerIcon2: {
    position: 'absolute',
    alignSelf:'flex-end',
    color: 'white',
    fontSize: 24,
    padding: 4,
    paddingHorizontal: 9,
    right:15
  //  ...HeaderProperties.backArrow,
   // left:350
   },
  /* ........................ */
});

export default styles;
