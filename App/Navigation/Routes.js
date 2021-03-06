import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { AboutScreen } from "../Containers/AboutScreen";
import { ContactScreen } from "../Containers/ContactScreen";
import DrawerScreen from "../Components/SideBar";

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      name: "HomeScreen",
      description: "HomeScreen",
      screen: HomeScreen,
      navigationOptions: {
        header: null,
        title: "Home Screen"
      }
    },
    ProfileScreen: {
      name: "ProfileScreen",
      description: "ProfileScreen",
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
        title: "Profile Screen"
      }
    }
  },

  {
    initialRouteName: "HomeScreen"
  }
);
const AboutStack = createStackNavigator(
  {
    AboutScreen: {
      name: "AboutScreen",
      description: "AboutScreen",
      screen: AboutScreen,
      navigationOptions: {
        header: null,
        title: "About Screen"
      }
    }
  },
  {
    initialRouteName: "AboutScreen"
  }
);

const ContactStack = createStackNavigator(
  {
    ContactScreen: {
      name: "ContactScreen",
      description: "ContactScreen",
      screen: ContactScreen,
      navigationOptions: {
        header: null,
        title: "Contact Screen"
      }
    }
  },
  {
    initialRouteName: "ContactScreen",
    navigationOptions: {
      headerTintColor: "#fff"
    }
  }
);

const DrawerRoutes = {
  HomeStack: {
    name: "HomeStack",
    screen: HomeStack
  },
  AboutStack: {
    name: "AboutStack",
    screen: AboutStack
  },
  ContactStack: {
    name: "ContactStack",
    screen: ContactStack
  }
};

const DrawerStack = createDrawerNavigator(DrawerRoutes, {
  contentComponent: DrawerScreen,
  initialRouteName: "HomeStack",
  headerMode: "screen",
  navigationOptions: {
    headerStyle: { backgroundColor: "#0082c9" },
    gesturesEnabled: false
  }
});

const MainAppRoutes = {
  DrawerStack: {
    screen: DrawerStack,
    name: "DrawerStack"
  }
};
export default MainAppRoutes;
