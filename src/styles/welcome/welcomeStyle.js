import { StyleSheet } from "react-native";

export const welcomeStyle = StyleSheet.create({
  containerWelcome: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    gap: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  welcomeText: {
    color: "#000",
    fontSize: 25,
    fontWeight: "600",
  },
  welcomeUserText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "400",
  },
});
