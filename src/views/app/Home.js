import React from 'react';
import dayjs from 'dayjs';
import DeviceInfo from 'react-native-device-info';
import {useDispatch} from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';
import Text from '../../components/Text';
import Container from '../../components/Container';
import {setSignOut} from '../../redux/slices/auth.slice';
import Button from '../../components/Button';
import 'dayjs/locale/es-mx';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../theme';
import {selectTheme} from '../../redux/slices/app.slice';
import {useSelector} from 'react-redux';
import Separator from '../../components/Separator';
import Icon from 'react-native-vector-icons/FontAwesome6';

dayjs.extend(relativeTime);

export default function HomeScreen() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  const doLogout = () => {
    dispatch(setSignOut());
  };

  const displayAppName = DeviceInfo.getApplicationName();
  const appVersion = DeviceInfo.getVersion();
  const deviceId = DeviceInfo.getDeviceId();

  return (
    <Container scroll={true}>
      <View style={[styles.card, {backgroundColor: colors[currentTheme].card}]}>
        <View style={styles.flexRow}>
          <View style={{flex: 1}}>
            <Image
              source={require('../../assets/MEMBERDEP.png')}
              style={styles.image}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              bold={true}
              style={[styles.title, {color: colors[currentTheme].text}]}>
              Deportista Elite
            </Text>
            <Text
              bold={true}
              style={[styles.title, {color: colors[currentTheme].text}]}>
              ID: 7870
            </Text>
          </View>
        </View>
        <Separator
          type="dashed"
          color="black"
          thickness={1}
          length="90%"
          style={styles.separator}
        />
        <View style={styles.details}>
          <Text
            bold={true}
            style={[styles.h1, {color: colors[currentTheme].text}]}>
            No. de estatus registrados : 10
          </Text>
        </View>
        <Separator
          type="dashed"
          color="black"
          thickness={1}
          length="90%"
          style={styles.separator}
        />
        <View style={[styles.card2, {color: colors[currentTheme].card2}]}>
          <Text
            bold={true}
            style={[styles.h1, {color: colors[currentTheme].text}]}>
            Proxima renovacion: 12/03/2026
          </Text>
        </View>
        <Separator
          type="dashed"
          color="black"
          thickness={1}
          length="90%"
          style={styles.separator}
        />
        <TouchableOpacity
          style={[styles.container, {color: colors[currentTheme].text}]}>
          <Text bold={true} style={[styles.text, {color: colors[currentTheme].text}]}>
            Detalles de Membresia
          </Text>
          <Icon
            name="arrow-right"
            size={20}
            color={colors[currentTheme].text}
          />
        </TouchableOpacity>
      </View>

      <Text
        bold={true}
        style={[styles.title, {color: colors[currentTheme].text}]}>
        Convocatorias Abiertas
      </Text>
      {/* convocatoria abiertas */}
      <View style={[styles.flexRow]}>
        <View style={styles.cardLogo}>
          <Image
            source={require('../../assets/LOGO.png')}
            style={styles.logo1}
          />
          <Text bold={true} style={[styles.text, {color: colors[currentTheme].text}]}>
            Deportistas Colombianos
          </Text>
        </View>
        <View style={styles.cardLogo}>
          <Image
            source={require('../../assets/LOGO.png')}
            style={styles.logo2}
          />
          <Text bold={true} style={[styles.text, {color: colors[currentTheme].text}]}>
            Federación Colombiana de futbol
          </Text>
        </View>
      </View>
      <View style={[styles.flexRow, {position: 'relative'}]}>
        <Image
          source={require('../../assets/BANNER.png')}
          style={styles.backgroundImage}
        />
        <Text style={[styles.footer, {color: colors[currentTheme].background}]}>
          Convocatoria abierta
        </Text>
        <Text
          style={[styles.footer2, {color: colors[currentTheme].background}]}>
          MINDEPORTE
        </Text>
      </View>

      <Button testID="logoutButton" onPress={() => doLogout()}>
        <Text buttonText>Cerrar sesión</Text>
      </Button> 
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 5,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  card2: {
    backgroundColor: '#EDEDEC',
    borderRadius: 10,
    margin: 2,
    padding: 10,
    
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
    flex:1
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  logo1: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#E9483E',
    padding:40,
    borderRadius:50
  },
  logo2: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#194295',
    padding:40,
    borderRadius:50
  },
  backgroundImage: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
  },
  footer: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 10,
  },
  footer2: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10,
  },
  details: {
    padding: 5,
  },
  h1: {
    fontSize: 12,
    textAlign: 'left',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    margin: 5,
    textAlign:"left"
  },
});
