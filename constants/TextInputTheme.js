import {DefaultTheme} from "react-native-paper";
import Colors from "./Colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    placeholder: Colors.gray,
    activeColor: Colors.white,
    primary: Colors.white,
    text: Colors.white,
    input: {
      textAlign: 'center'
    }
  }
};

export default theme;
