import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  Text,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Notification from 'react-native-vector-icons/MaterialIcons';

import {selectTheme} from '../../redux/slices/app.slice';
import {colors} from '../../theme';
import {setSignOut} from '../../redux/slices/auth.slice';
import {useDispatch} from 'react-redux';
import Separator from '../Separator';

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const doLogout = () => {
    dispatch(setSignOut());
  };

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleFind = () => navigation.navigate('find');

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors[currentTheme].background,
            borderBottomColor: colors[currentTheme].inactive,
          },
        ]}>
        <View style={styles.leftContainer}>
          <Image
            source={
              currentTheme === 'dark'
                ? require('../../assets/LogoMinBlanco.png')
                : require('../../assets/Logo_Ministerio_del_Deporte_de_Colombia_2022-2026.png')
            }
            style={styles.logoIlteca}
          />
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={handleMenuToggle}>
            <Image
              source={require('../../assets/naowee_suitelogono.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleMenuToggle}>
            <Notification
              name="notifications-none"
              size={27}
              color={colors[currentTheme].text}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => {
          setMenuVisible(!menuVisible);
        }}>
        <Pressable
          style={styles.menuContainer}
          onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => setMenuVisible(false)}
              style={styles.closeIconContainer}>
              <Icon name="close" size={24} color={colors[currentTheme].text} />
            </TouchableOpacity>
            <Pressable
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Settings');
              }}>
              <Text style={styles.menuItem}>Configuración</Text>
            </Pressable>
            <Separator />
            <Pressable onPress={() => doLogout()}>
              <Text style={styles.menuItem}>Cerrar Sesión</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 35,
    resizeMode: 'contain',
  },
  logoIlteca: {
    width: 100,
    height: 35,
    resizeMode: 'cover',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#153c67',
  },
  closeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'darkgray',
    borderRadius: 20,
  },
});

export default Header;
