import React, { useState } from 'react';
import dayjs from 'dayjs';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';
import Text from '../../components/Text';
import Container from '../../components/Container';
import { setSignOut } from '../../redux/slices/auth.slice';
import Button from '../../components/Button';
import 'dayjs/locale/es-mx';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../theme';
import { selectTheme } from '../../redux/slices/app.slice';
import { useSelector } from 'react-redux';
import Separator from '../../components/Separator';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';

dayjs.extend(relativeTime);

export default function Trajectory() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  // Estado para almacenar los datos actualizados
  const [userData, setUserData] = useState({
    nombre: 'Juan Perez',
    tipoIdentificacion: 'Cédula',
    numeroIdentificacion: '123456789',
    fechaNacimiento: '01/01/2000',
    correoElectronico: 'soporte@naowee.com',
  });

  // Función para manejar el cambio de valores en los campos de entrada
  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  // Función para manejar la actualización de datos
  const handleUpdateData = () => {
    // Aquí puedes realizar cualquier lógica necesaria para actualizar los datos en el backend o en el estado de la aplicación
    // En este ejemplo, simplemente mostramos los datos actualizados en la consola
    console.log('Datos actualizados:', userData);
  };

  return (
    <Container scroll={true}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/MEMBERDEP.png')}
          style={styles.image}
        />
        <Text style={styles.header}>Deportista Elite</Text>
        <Text style={styles.name}>{userData.nombre}</Text>
        <Text style={styles.name2}>CC. {userData.numeroIdentificacion}</Text>
        <Image
              source={require('../../assets/qr.png')}
              style={styles.qr}
            />
      </View>

      <View style={[styles.card, { backgroundColor: colors[currentTheme].card }]}>
        <Text
          bold={true}
          style={[styles.title, { color: colors[currentTheme].text }]}>
          Mis Datos
        </Text>
        <Separator
          type="dashed"
          color="#CAC7C7"
          thickness={1}
          length="90%"
          style={styles.separator}
        />
        <Input
          title={'Nombre'}
          label="Nombre"
          placeholder="Nombre"
          value={userData.nombre}
          onChangeText={(text) => handleInputChange('nombre', text)}
          style={[styles.title, { color: colors[currentTheme].text }]}
        />
        <Input
          title={'Tipo de identificación'}
          label="Tipo de identificación"
          placeholder="Tipo de identificación"
          value={userData.tipoIdentificacion}
          onChangeText={(text) => handleInputChange('tipoIdentificacion', text)}
        />
        <Input
          title={'Número de identificación'}
          label="Número de identificación"
          placeholder="Número de identificación"
          value={userData.numeroIdentificacion}
          onChangeText={(text) => handleInputChange('numeroIdentificacion', text)}
        />
        <Input
          title={'Fecha de nacimiento'}
          label="Fecha de nacimiento"
          placeholder="Fecha de nacimiento"
          value={userData.fechaNacimiento}
          onChangeText={(text) => handleInputChange('fechaNacimiento', text)}
        />
        <Input
          title={'Correo electrónico'}
          label="Correo electrónico"
          placeholder="Correo electrónico"
          value={userData.correoElectronico}
          onChangeText={(text) => handleInputChange('correoElectronico', text)}
        />

        <CustomButton
          name="Actualizar Datos"
          onPress={handleUpdateData}
          color="#4B579E"
          textColor="#fff"
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  header: {
    position: 'absolute',
    top: "33%",
    right: "23%",
    fontSize: 23,
    color: 'gray',
    fontWeight: 'bold',
  },
  qr: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    position: 'absolute',
    top: '50%',
    right: "25%",
  },
  image: {
    width: '100%',
    height: 200, // Ajusta la altura según tus necesidades
  },
  name: {
    position: 'absolute',
    bottom: "32%",
    left: "20%",
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  name2: {
    position: 'absolute',
    bottom: "26%",
    left: "20%",
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
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  title: {
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
    width: 200,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
  },
  separator: {
    marginVertical: 0,
    color: 'grey',
  },
});
