import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { AboutScreen } from "../Containers/AboutScreen";
import { ContactScreen } from "../Containers/ContactScreen";
import DrawerScreen from "../Components/SideBar";

// const AppDrawer = createDrawerNavigator(
//   {
//     HomeScreen: {
//       screen: HomeScreen
//     },
//     ProfileScreen: {
//       screen: ProfileScreen
//     }
//   },
//   {
//     navigationOptions: {
//       gesturesEnabled: false
//     },
//     initialRouteName: "HomeScreen",
//     contentOptions: {
//       activeTintColor: "#e91e63"
//     },
//     drawerPosition: "right"
//   }
// );

// export default {
//   Drawer: {
//     name: "Drawer",
//     description: "Drawer",
//     screen: AppDrawer
//   },
//   HomeScreen: {
//     name: "HomeScreen",
//     description: "HomeScreen",
//     screen: HomeScreen,
//     navigationOptions: {
//       title: "Restaurant List near You"
//     }
//   },
//   ProfileScreen: {
//     name: "ProfileScreen",
//     description: "ProfileScreen",
//     screen: ProfileScreen,
//     navigationOptions: {
//       title: "Menu List"
//     }
//   }
// };

// import RestaurantListScreen from "../components/restList";
// import RestaurantProfileScreen from "../components/restProfile";
// import { StackNavigator,DrawerNavigator } from "react-navigation";
// import SideMenu from '../components/sideMenu'
// import Screen1 from '../components/Screen1'
// import Screen2 from '../components/Screen2'
// import Screen3 from '../components/Screen3'

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
