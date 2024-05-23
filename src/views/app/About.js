import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/App';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';

export default function AboutScreen() {
  const navigate = useNavigation();
  
  return (
    <Container>
      <Button
        testID="goToSettingsButton"
        onPress={() => navigate.navigate('Settings', { id: '123' })}>
        <Text buttonText>Configuración</Text>
      </Button>
    </Container>
  );
}
