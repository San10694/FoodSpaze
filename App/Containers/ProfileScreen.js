import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import StarRating from "react-native-star-rating";

export default class ProfileScreen extends Component {
  componentDidMount() {
    console.log(" params ", this.props.navigation.getParam("menuList"));
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
    const menuList = this.props.navigation.getParam("menuList");
    if (!menuList) {
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
        <Text style={styles.category}>VEG</Text>
        {this.renderItems(menuList[0].Veg)}
        <Text style={styles.category}>NON VEG</Text>
        {this.renderItems(menuList[0].nonVeg)}
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
