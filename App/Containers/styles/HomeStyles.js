import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export default {
  Container: {
    flex: 1,
    padding: 6,
    backgroundColor: "#c1d4f4"
  },
  InputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: height / 12,
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  Inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4
  },
  LisItem: {
    marginHorizontal: 4,

    flexDirection: "row",
    borderRadius: 1,
    backgroundColor: "#fff",
    shadowColor: "grey",
    padding: 4,
    marginBottom: 6,
    borderRadius: 4,
    height: height * 0.18,

    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  ItemImgWrapper: {
    flex: 3,
    width: 80,
    height: 80,
    paddingLeft: 10,
    paddingTop: 4
  },
  ItemImg: {
    width: width / 3,
    height: width / 4,
    borderRadius: 4
  },
  LisItemBody: {
    flex: 7,
    paddingLeft: 50,
    paddingTop: 1
  },
  Title: {
    fontSize: 18,
    fontWeight: "600",
    color: "grey",
    marginBottom: 4
  },
  Detail: {
    fontSize: 14,
    fontWeight: "300",
    color: "grey",
    overflow: "hidden",
    marginBottom: 10,
    paddingRight: 10
  }
};
