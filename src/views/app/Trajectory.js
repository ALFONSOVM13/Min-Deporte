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

export default function Trajectory() {
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

    </Container>
    );
}