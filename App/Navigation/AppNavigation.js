import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import {
  createStackNavigator,
  DrawerActions,
  createDrawerNavigator
} from "react-navigation";
import Routes from "./Routes";

const MenuImage = ({ navigation }) => {
  //if (!navigation.state.isDrawerOpen) {
  return <Image source={require("../Assets/menu-button.png")} />;
  //}
};

const PrimaryNav = createStackNavigator(Routes, {
  initialRouteName: "DrawerStack",

  navigationOptions: ({ navigation }) => ({
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#5672a0"
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
        style={{ margin: 10, justifyContent: "center" }}
      >
        <MenuImage navigation={navigation} />
      </TouchableOpacity>
    ),
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#000"
    },
    animationEnabled: true
  })
});

export default PrimaryNav;
