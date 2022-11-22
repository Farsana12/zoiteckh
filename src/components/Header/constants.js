import { Dimensions,StatusBar } from "react-native";
import { fontFamily } from "../../Theme/fontFamily";

export const HeaderProperties = {
  backgroundColor: 'red',
  textColor: 'white',
  text_center: {
    color: 'white',
    fontFamily: fontFamily.OBJ_BOLD,
    fontSize: 29,
  },
  height: 100,
  backArrow: {
    color: 'white',
    fontSize: 24,
    left: 10,
    // top: 17,
    padding: 4,
    paddingHorizontal: 7,
  },
};
export const HEIGHT_WITHOUT_HEADER =deviceHeight- HeaderProperties.height-40
export const deviceHeight = Dimensions.get('screen').height;
export const deviceWidth = Dimensions.get('screen').width;
export const screenHeight =
  Dimensions.get('window').height - StatusBar.currentHeight;
export const statusBarHeight = StatusBar.currentHeight;
export const HeaderHeight = Math.floor(deviceHeight * 0.07);