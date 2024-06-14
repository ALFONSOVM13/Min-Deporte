import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { HomeScreenNavigationProp } from '../../navigation/App';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { selectTheme, setTheme } from '../../redux/slices/app.slice';
import { colors } from '../../theme';

export default function SettingScreen() {
  const navigate = useNavigation();
  const currentTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(setTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };

  const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center', // Centra los botones horizontalmente
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Container>
      <Text>Pantalla de configuración</Text>
      <View style={styles.buttonContainer}>
        <Button testID="goBackButton" onPress={() => navigate.goBack()}>
          <Text buttonText>Atrás</Text>
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button testID="themeButton" onPress={changeTheme}>
          {currentTheme === 'light' ? (
            <View style={styles.container}>
              <Text testID="darkText" buttonText>
                Activar modo oscuro
              </Text>
              <Icon
                name="dark-mode"
                size={20}
                color={colors[currentTheme].buttonText}
              />
            </View>
          ) : (
            <View style={styles.container}>
              <Text testID="lightText" buttonText>
                Activar modo claro
              </Text>
              <Icon
                name="light-mode"
                size={20}
                color={colors[currentTheme].buttonText}
              />
            </View>
          )}
        </Button>
      </View>
    </Container>
  );
}
