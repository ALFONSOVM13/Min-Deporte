import {StyleSheet} from 'react-native';

const stylesProfesional = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 5,
    padding: 10,
    elevation: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },

  cardBody: {
    backgroundColor: 'hsl(0, 90%, 96.07843137254902%)',
    padding: 20,
    borderRadius: 0,
  },
  profile: {
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  profileMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 64,
  },
  profileDetails: {
    flex: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303e67',
    fontFamily: "Poppins",
  },
  userIdentification: {
    fontSize: 14,
    color: '#303e67',
    marginTop: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    marginRight: 10,
    color: '#888',
    fontSize: 12,
  },
  subtitle: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  refreshIcon: {
    color: '#888',
  },
  statusSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  contractor: {
    fontSize: 12,
    marginTop: 10,
    color: 'black',
  },
  disponibility: {
    fontSize: 12,
    marginTop: 5,
    color: 'black',
  },
  guion: {
    marginTop: 5,
    color: 'gray',
  },
});

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonRed: {
    backgroundColor: '#EA5A2B',
    padding: 8,
    borderRadius: 5,
    color: 'white',
  },
  buttonGreen: {
    backgroundColor: '#4EA733',
    padding: 8,
    borderRadius: 5,
    color: 'white',
  },
  titleButton: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 12,
  },
  details: {
    marginTop: 10,
  },
});

const stylesBottoms = {
  cardBody: {
    marginBottom: 0,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  navItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  navLink: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
  },
  activeNavItem: {
    backgroundColor: '#F29F11',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activeNavLink: {
    color: '#FFFFFF',
  },

};

export default {stylesProfesional, styles, stylesBottoms};
