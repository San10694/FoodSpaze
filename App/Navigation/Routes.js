import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

const AppDrawer = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    ProfileScreen: {
      screen: ProfileScreen
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    initialRouteName: "HomeScreen",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    drawerPosition: "right"
  }
);

export default {
  Drawer: {
    name: "Drawer",
    description: "Drawer",
    screen: AppDrawer
  },
  HomeScreen: {
    name: "HomeScreen",
    description: "HomeScreen",
    screen: HomeScreen,
    navigationOptions: {
      title: "Restaurant List near You"
    }
  },
  ProfileScreen: {
    name: "ProfileScreen",
    description: "ProfileScreen",
    screen: ProfileScreen,
    navigationOptions: {
      title: "Menu List"
    }
  }
};
