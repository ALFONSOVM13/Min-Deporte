import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Notification from 'react-native-vector-icons/MaterialIcons';

import {selectTheme} from '../../redux/slices/app.slice';
import {colors} from '../../theme';

const Header = ({handleMenuToggle}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentTheme = useSelector(selectTheme);

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
            source={require('../../assets/Logo_Ministerio_del_Deporte_de_Colombia_2022-2026.png')}
            style={styles.logoIlteca}
          />
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={handleFind}>
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
});

export default Header;
