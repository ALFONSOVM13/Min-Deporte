import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../navigation/App';
import {setSignOut} from '../../redux/slices/auth.slice';

import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../theme';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../redux/slices/app.slice';

export default function AboutScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const currentTheme = useSelector(selectTheme);

  const doLogout = () => {
    dispatch(setSignOut());
  };

  return (
    <Container scroll={false}>
      <Text
        bold={true}
        style={[styles.title, {color: colors[currentTheme].text}]}>
        Clubes a que pertenece
      </Text>
      <View style={[styles.flexRow]}>
        <View
          style={[
            styles.cardLogo,
            {backgroundColor: colors[currentTheme].card},
          ]}>
          <Image
            source={require('../../assets/LOGO.png')}
            style={styles.logo1}
          />
          <Text
            bold={true}
            style={[styles.text, {color: colors[currentTheme].text}]}>
            Deportistas Colombianos
          </Text>
        </View>
        <View
          style={[
            styles.cardLogo,
            {backgroundColor: colors[currentTheme].card},
          ]}>
          <Image
            source={require('../../assets/LOGO.png')}
            style={styles.logo2}
          />
          <Text
            bold={true}
            style={[styles.text, {color: colors[currentTheme].text}]}>
            Federación Colombiana de fútbol
          </Text>
        </View>
      </View>
      <View style={[styles.flexRow]}>
        <View
          style={[
            styles.cardLogo,
            {backgroundColor: colors[currentTheme].card},
          ]}>
          <Image
            source={require('../../assets/LOGO.png')}
            style={styles.logo1}
          />
          <Text
            bold={true}
            style={[styles.text, {color: colors[currentTheme].text}]}>
            Deportistas Colombianos
          </Text>
        </View>
        <View
          style={[
            styles.cardLogo,
            {backgroundColor: colors[currentTheme].card},
          ]}>
          <Image
            source={require('../../assets/LOGO.png')}
            style={styles.logo2}
          />
          <Text
            bold={true}
            style={[styles.text, {color: colors[currentTheme].text}]}>
            Federación Colombiana de fútbol
          </Text>
        </View>
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button
          testID="goToSettingsButton"
          onPress={() => navigate.navigate('Settings', {id: '123'})}>
          <Text buttonText>Configuración</Text>
        </Button>

        <Button testID="logoutButton" onPress={() => doLogout()}>
          <Text buttonText>Cerrar sesión</Text>
        </Button>
      </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 5,
    textAlign: 'left',
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  cardLogo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    flex: 1,
  },
  logo1: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#E9483E',
    padding: 40,
    borderRadius: 50,
  },
  logo2: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#194295',
    padding: 40,
    borderRadius: 50,
  },
});
