import { StyleSheet } from "react-native";
import Colors from "../../theme/Colors";
import { Size } from "../../theme/Layout";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white,
    paddingHorizontal: Size.s24,
    paddingVertical: Size.s16,
    marginTop: Size.s10,
    borderTopEndRadius: Size.s28,
    borderTopStartRadius: Size.s28,
  },
});
