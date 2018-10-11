import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import StarRating from "react-native-star-rating";
const { width, height } = Dimensions.get("window");

export default class ProfileScreen extends Component {
  componentDidMount() {
    console.log(" params ", this.props.navigation.getParam("details"));
  }

  renderItems(items) {
    return items.map((item, index) => {
      return (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            shadowColor: "grey",
            padding: 10,
            margin: 5,
            borderRadius: 4,
            height: 50,
            shadowOffset: {
              width: 2,
              height: 3
            },
            shadowRadius: 3,
            shadowOpacity: 0.5
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "grey"
            }}
          >
            {item.dish_name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "grey",
              textAlign: "center"
            }}
          >
            {"\u20B9"} {item.price}
          </Text>
          <View>
            <StarRating
              disabled={true}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              maxStars={5}
              rating={item.rating}
              fullStarColor={"gold"}
              starStyle={{ fontSize: 16 }}
            />
          </View>
        </View>
      );
    });
  }

  render() {
    const restaurantDetails = this.props.navigation.getParam("details");
    console.log("restaurant details ", restaurantDetails);
    const { menu_list } = restaurantDetails;
    if (!restaurantDetails) {
      return (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>No List found!</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            paddingTop: 5,
            paddingHorizontal: 5
          }}
        >
          <Image
            source={{ uri: restaurantDetails.image_url }}
            style={{
              width: width - 10,
              height: width * 0.6,
              borderRadius: 4
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
            marginBottom: 4
          }}
        >
          {restaurantDetails.name}
        </Text>
        <Text style={styles.category}>VEG</Text>
        {this.renderItems(menu_list ? menu_list[0].Veg : [])}
        <Text style={styles.category}>NON VEG</Text>
        {this.renderItems(menu_list ? menu_list[0].nonVeg : [])}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1d4f4",
    marginBottom: 20
  },
  category: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
