import { StyleSheet } from "react-native";
import Colors from "../../../theme/Colors";

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
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
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
    flexDirection: "row",
    marginTop: 16,
    gap: 5,
  },
});
