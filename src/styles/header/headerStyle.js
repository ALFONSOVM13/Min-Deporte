import { Dimensions, Platform, StyleSheet } from "react-native";
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');


export const headerStyle = StyleSheet.create({
  headerMenuSizeSm:{
    top: (Platform.OS !=='ios'? (SCREEN_HEIGHT / 1.7) : (SCREEN_HEIGHT / 1.5)),
  },
  headerMenuSizeMd:{
    top: (Platform.OS !=='ios'? (SCREEN_HEIGHT / 1.8) : (SCREEN_HEIGHT / 2.1)),
  },
  headerMenuSizeLg:{
    top: "10%",
  },
  headerMenu: {
    width: "100%",
    height: SCREEN_HEIGHT,
    backgroundColor: "#fff",
    position: "absolute",
    top: (Platform.OS !=='ios'? (SCREEN_HEIGHT / 1.7) : (SCREEN_HEIGHT / 1.5)),
    zIndex: 12000,
    borderRadius: 25,
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 35,
    gap: 1,
  },
  headerMenuItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
  },
  headerMenuItemBorder:{
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',

  },
  headerMenutext:{
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: "#000",

  },
  closeButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    height: 15
  },
  closeButtonLine:{
    width: 150,
    height: 6,
    backgroundColor: '#cdcdcd',
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 30,
  }
});
