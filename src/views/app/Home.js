import React from 'react';
import dayjs from 'dayjs';
import DeviceInfo from 'react-native-device-info';
import relativeTime from 'dayjs/plugin/relativeTime';
import Text from '../../components/Text';
import Container from '../../components/Container';
import 'dayjs/locale/es-mx';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../theme';
import {selectTheme} from '../../redux/slices/app.slice';
import {useSelector} from 'react-redux';
import Separator from '../../components/Separator';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

dayjs.extend(relativeTime);

export default function HomeScreen() {
  const currentTheme = useSelector(selectTheme);
  const navigation = useNavigation();

  return (
    <Container scroll={false}>
      <View style={[styles.card, {backgroundColor: colors[currentTheme].card}]}>
        <Text
          bold={true}
          style={[styles.estado, {color: colors[currentTheme].title}]}>
          Activo
        </Text>
        <View style={styles.flexRow}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/MEMBERDEP.png')}
              style={styles.image}
            />
            <Image
              source={require('../../assets/qr.png')}
              style={styles.qr}
            />
            <Text style={styles.name}>Juan Perez</Text>
            <Text style={styles.name2}>CC. 12345678</Text>
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
          color={colors[currentTheme].inactive}
          thickness={1}
          length="90%"
          style={styles.separator}
        />
        <View style={styles.details}>
          <Text
            bold={true}
            style={[styles.h2, {color: colors[currentTheme].text}]}>
            No. de estatus registrados: 10
          </Text>
        </View>
        <Separator
          type="dashed"
          color={colors[currentTheme].inactive}
          thickness={1}
          length="90%"
          style={styles.separator}
        />
        <View
          style={[styles.card2, {backgroundColor: colors[currentTheme].card2}]}>
          <Text
            bold={true}
            style={[styles.h1, {color: colors[currentTheme].text}]}>
            Próxima renovación: 12/03/2026
          </Text>
        </View>
        <Separator
          type="dashed"
          color={colors[currentTheme].inactive}
          thickness={1}
          length="90%"
          style={styles.separator}
        />
        <TouchableOpacity
          style={[
            styles.container,
            {backgroundColor: colors[currentTheme].card},
          ]}
          onPress={() => navigation.navigate('Membership')}>
          <Text
            bold={true}
            style={[styles.text, {color: colors[currentTheme].text}]}>
            Detalles de Membresía
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
      {/* Convocatorias abiertas */}
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
    </Container>
  );
}

const styles = StyleSheet.create({
  estado: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 10,
  },
  qr: {
    position: 'absolute',
    top: "50%",
    right: 30,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  imageContainer: {
    position: 'relative',
  },
  name: {
    position: 'absolute',
    bottom: '35%',
    left: '5%',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  name2: {
    position: 'absolute',
    bottom: '25%',
    left: '5%',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
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
    padding: 10,
    marginHorizontal: 15,
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
    width: 300,
    height: 200,
    resizeMode: 'contain',
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
  backgroundImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  footer: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    fontSize: 24,
    color: 'white',
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  footer2: {
    position: 'absolute',
    top: '60%',
    alignSelf: 'center',
    fontSize: 40,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10,
  },
  details: {
    padding: 5,
  },
  h1: {
    fontSize: 18,
    textAlign: 'left',
  },
  h2: {
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    margin: 5,
    textAlign: 'left',
  },
});
