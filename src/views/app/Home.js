import React from 'react';
import dayjs from 'dayjs';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';
import Text from '../../components/Text';
import Container from '../../components/Container';
import { setSignOut } from '../../redux/slices/auth.slice';
import Button from '../../components/Button';
import 'dayjs/locale/es-mx';

dayjs.extend(relativeTime);

export default function HomeScreen() {
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(setSignOut());
  };

  const displayAppName = DeviceInfo.getApplicationName();
  const appVersion = DeviceInfo.getVersion();
  const deviceId = DeviceInfo.getDeviceId();

  return (
    <Container>
      <Button testID="logoutButton" onPress={() => doLogout()}>
        <Text buttonText>Cerrar sesión</Text>
      </Button>
    </Container>
  );
}
