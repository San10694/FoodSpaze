import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import Drawer from "react-native-drawer";
import {
  getRestaurantList,
  saveCurrentLocation,
  searchByName
} from "../Redux/ListRedux";
import Styles from "./styles/HomeStyles";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Restaurant Screen"
  };
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    this.props.getRestaurantList();
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        console.log("geo-response ", initialPosition);
        this.props.saveCurrentLocation(position);
      },
      error => alert(error.message),
      { enableHighAccuracy: false, timeout: 5000 }
    );
  }

  handleChange(value) {
    //console.log("input ----", value);
    this.setState({ value });
    this.props.searchByName(value);
    if (value !== "") {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { navigation, filteredByLocation } = this.props;
    if (!filteredByLocation) {
      return (
        <View>
          <Text>loading ...</Text>
        </View>
      );
    }
    return (
      <View style={Styles.Container}>
        <View style={styles.InputContainer}>
          <TextInput
            style={{
              height: 45,
              marginHorizontal: 4,
              marginVertical: 10,
              borderBottomColor: "#FFFFFF",
              backgroundColor: "#fff",
              borderRadius: 4
            }}
            placeholder="Search Restaurants ..."
            underlineColorAndroid="transparent"
            value={this.state.value}
            onChangeText={value => {
              this.handleChange(value);
            }}
          />
        </View>
        <ScrollView style={{}}>
          <FlatList
            data={filteredByLocation}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProfileScreen", {
                    details: item
                  });
                }}
              >
                <View style={Styles.LisItem}>
                  <View style={Styles.ItemImgWrapper}>
                    <Image
                      source={{ uri: item.image_url }}
                      style={Styles.ItemImg}
                    />
                  </View>
                  <View style={Styles.LisItemBody}>
                    <Text style={Styles.Title}>{item.name}</Text>
                    <Text style={Styles.Detail}>Contact : {item.contact}</Text>
                    <Text
                      style={{
                        fontWeight: "bold"
                      }}
                    >
                      Distance : {item.distance} Km
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { restaurants, filteredByLocation, searchList } = state.restaurantList;
  console.log("State in filteredByLocation- ", searchList);
  return {
    restaurants,
    filteredByLocation,
    searchList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurantList: () => dispatch(getRestaurantList()),
    saveCurrentLocation: position => dispatch(saveCurrentLocation(position)),
    searchByName: value => dispatch(searchByName(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const drawerStyles = {
  drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
