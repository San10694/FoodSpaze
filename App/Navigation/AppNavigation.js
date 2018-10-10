import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Routes from "./Routes";

const PrimaryNav = createStackNavigator(Routes, {
  initialRouteName: "HomeScreen",

  navigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#5672a0"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff"
    },
    animationEnabled: true
  }
});

export default PrimaryNav;
