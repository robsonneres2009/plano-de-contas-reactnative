import { StyleSheet } from "react-native";
import Colors from "../../../theme/Colors";
import { Size } from "../../../theme/Layout";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo preto com opacidade
  },
  modalContent: {
    width: 280,
    maxHeight: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-start",
    gap: 8,
  },
  modalText: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.black,
  },
  modalTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    color: Colors.black,
  },
  containerButtons: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    gap: 5,
  },
  containerOptions: {
    padding: Size.s16,
    borderColor: Colors.gray,
    borderWidth: 0.5,
    borderRadius: 10,
    width: "100%",
  },
  scrollView: {
    width: "100%",
  },
});
