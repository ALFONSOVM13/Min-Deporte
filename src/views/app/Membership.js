import React, {useState} from 'react';
import dayjs from 'dayjs';
import DeviceInfo from 'react-native-device-info';
import {useDispatch, useSelector} from 'react-redux';
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
import Separator from '../../components/Separator';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../components/CustomButton';

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
      fecha: '2022-03-25',
      titulo: 'Entrenamiento de resistencia',
    },
    {
      id: 2,
      fecha: '2023-05-26',
      titulo: 'Competición de atletismo',
    },
    {
      id: 3,
      fecha: '2023-07-27',
      titulo: 'Entrenamiento de fuerza y ​​acondicionamiento',
    },
    {
      id: 4,
      fecha: '2024-03-28',
      titulo: 'Entrenamiento de velocidad',
      
    },
    {
      id: 5,
      fecha: '2024-01-29',
      titulo: 'Competición de natación',
    },
    
  ];
  

  // Estado para almacenar la cantidad de entradas por página y la página actual
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el rango de elementos mostrados
  const startIndex = (currentPage - 1) * entriesPerPage + 1;
  const endIndex = Math.min(data.length, startIndex + entriesPerPage - 1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(data.length / entriesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(data.length / entriesPerPage);

  return (
    <Container scroll={false}>
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
            <Text style={[styles.title, {color: colors[currentTheme].text}]}>
              Mostrar
            </Text>
            <Picker
              selectedValue={entriesPerPage}
              style={{height: 50, width: 100, color: colors[currentTheme].text}}
              onValueChange={itemValue => {
                setEntriesPerPage(itemValue);
                setCurrentPage(1); // Reiniciar la página actual al cambiar la cantidad de entradas por página
              }}>
              <Picker.Item label="1" value={1} />
              <Picker.Item label="10" value={10} />
              <Picker.Item label="50" value={50} />
              <Picker.Item label="100" value={100} />
            </Picker>
            <Text style={[styles.title, {color: colors[currentTheme].text}]}>
              entradas
            </Text>
          </View>
          <Text
            style={[
              styles.tableTitle,
              {
                backgroundColor: colors[currentTheme].text,
                color: colors[currentTheme].title,
              },
            ]}>
            Registro de Trayectoria
          </Text>
          {/* Selector de entradas por página */}
        </View>
        {/* Tabla */}
        <FlatList
          data={data.slice(
            (currentPage - 1) * entriesPerPage,
            currentPage * entriesPerPage,
          )}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={[
                styles.row,
                {borderBottomColor: colors[currentTheme].border},
              ]}>
              <Text
                style={[
                  styles.cell,
                  styles.dateCell,
                  {color: colors[currentTheme].text},
                ]}>
                {dayjs(item.fecha).format('DD/MM/YYYY')}
              </Text>
              <Text
                style={[
                  styles.cell,
                  styles.titleCell,
                  {color: colors[currentTheme].text},
                ]}>
                {item.titulo}
              </Text>
            </View>
          )}
          ListFooterComponent={() => (
            <Text
              style={[
                styles.paginationText,
                {color: colors[currentTheme].text},
                {backgroundColor: colors[currentTheme].card2}
              ]}>
              {`Mostrando ${startIndex} a ${endIndex} de ${data.length} entradas`}
            </Text>
          )}
        />
        {totalPages > 1 && (
          <View style={styles.paginationButtons}>
            <CustomButton
              name={'Anterior'}
              icon={'chevron-left'}
              color={'#CAC7C7'}
              onPress={goToPreviousPage}
              disabled={currentPage === 1}
              style={styles.paginationButton}
              textStyle={styles.paginationButtonText}
            />
            <Text style={styles.currentPageText}>{currentPage}</Text>
            <CustomButton
              name={'Siguiente'}
              color={'#CAC7C7'}
              icon={'chevron-right'}
              onPress={goToNextPage}
              disabled={currentPage === Math.ceil(data.length / entriesPerPage)}
              style={styles.paginationButton}
              textStyle={styles.paginationButtonText}
              iconPosition={'right'}
            />
          </View>
        )}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EDEDEC',
    borderRadius: 10,
    margin: 10,
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
    borderBottomWidth: 0.3,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
  },
  dateCell: {
    borderRightWidth: 1,
  },
  titleCell: {
    flex: 3,
    textAlign: 'center',
    fontSize: 13,
  },
  tableTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    paddingVertical: 10,
  },
  paginationText: {
    textAlign: 'center',
    backgroundColor: '#CAC7C7',
    padding: 10,
    fontSize:12
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
  },
  selected: {
    fontWeight: 'bold',
  },
  paginationButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationButton: {
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  paginationButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  currentPageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
