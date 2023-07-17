import { StyleSheet } from "react-native";
import Colors from "../../theme/Colors";
import { Size } from "../../theme/Layout";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: Size.s16,
  },
  title: {
    fontSize: Size.s24,
  },
  label: {
    fontSize: Size.s20,
    color: Colors.gray,
  },
  wrapper: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
