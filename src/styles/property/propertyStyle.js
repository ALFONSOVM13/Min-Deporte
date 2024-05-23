import { Dimensions, StyleSheet } from "react-native";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const propertyStyle = StyleSheet.create({
  containers: {
    padding: 10,
    backgroundColor:"white"
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    color: '#40916c',
    marginLeft: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 0,
    color: '#000',

  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  picker: {
    height: 40,
    backgroundColor: "#F3F3F3",
    borderRadius: 7,
    marginVertical: 5,
  },
  buttonContainer: {
    marginBottom: 100,
  },
  dateInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  legalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  legalButtonContent
  : {
    flex: 1
  },    
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
