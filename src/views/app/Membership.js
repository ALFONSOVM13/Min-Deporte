import React, {useState} from 'react';
import dayjs from 'dayjs';
import DeviceInfo from 'react-native-device-info';
import {useDispatch} from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';
import Text from '../../components/Text';
import Container from '../../components/Container';
import {setSignOut} from '../../redux/slices/auth.slice';
import Button from '../../components/Button';
import 'dayjs/locale/es-mx';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {colors} from '../../theme';
import {selectTheme} from '../../redux/slices/app.slice';
import {useSelector} from 'react-redux';
import Separator from '../../components/Separator';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Picker } from '@react-native-picker/picker';

dayjs.extend(relativeTime);

export default function Membership() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  const doLogout = () => {
    dispatch(setSignOut());
  };

  const displayAppName = DeviceInfo.getApplicationName();
  const appVersion = DeviceInfo.getVersion();
  const deviceId = DeviceInfo.getDeviceId();

  // Datos de ejemplo para la tabla
  const data = [
    {
      id: 1,
      fecha: '2024-05-25',
      titulo: 'Acompañamiento en tecnologia Presencial',
    },
    {id: 2, fecha: '2024-05-26', titulo: 'Conductor con vehiculo'},
    {
      id: 3,
      fecha: '2024-05-27',
      titulo: 'Acompañamiento en tecnologia Presencial',
    },
    // Puedes agregar más datos aquí
  ];

  // Estado para almacenar la cantidad de entradas por página
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Calcular el rango de elementos mostrados
  const startIndex = 1;
  const endIndex = Math.min(data.length, startIndex + entriesPerPage - 1);

  return (
    <Container scroll={true}>
      <View style={[styles.card, {backgroundColor: colors[currentTheme].card}]}>
        <Text
          bold={true}
          style={[styles.title, {color: colors[currentTheme].text}]}>
          Mi Carrera Deportiva
        </Text>
        <Separator
          type="dashed"
          thickness={1}
          length="90%"
          style={styles.separator}
          color={colors[currentTheme].inactive}
        />
        {/* Encabezado de la tabla */}
        <View style={styles.header}>
          <View style={styles.pageSelector}>
            <Text style={styles.pageSelectorText}>Mostrar</Text>
            <Picker
              selectedValue={entriesPerPage}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue) => setEntriesPerPage(itemValue)}>
              <Picker.Item label="1" value={1} />
              <Picker.Item label="10" value={10} />
              <Picker.Item label="50" value={50} />
              <Picker.Item label="100" value={100} />
            </Picker>
            <Text style={styles.pageSelectorText}>entradas</Text>

          </View>
          <Text style={styles.tableTitle}>Registro de Trayectoria</Text>
          {/* Selector de entradas por página */}
        </View>
        {/* Tabla */}
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.row}>
              <Text style={[styles.cell, styles.dateCell]}>
                {dayjs(item.fecha).format('DD/MM/YYYY')}
              </Text>
              <Text style={[styles.cell, styles.titleCell]}>{item.titulo}</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <Text style={styles.paginationText}>
              {`Mostrando ${startIndex} a ${endIndex} de ${data.length} entradas`}
            </Text>
          )}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EDEDEC',
    borderRadius: 10,
    margin: 10,
    padding: 5,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  separator: {
    marginTop: 5,
    marginBottom: 10,
  },
  header: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  dateCell: {
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  titleCell: {
    flex: 2,
    textAlign: 'center',
  },
  tableTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#29211E',
    color: '#fff',
    paddingVertical: 10,
  },
  paginationText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
    color: '#666',
  },
  pageSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  pageSelectorText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#333',
  },
  selected: {
    fontWeight: 'bold',
  },
});
