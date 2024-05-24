  import React from 'react';
  import {useDispatch} from 'react-redux';
  import {setSignIn} from '../../redux/slices/auth.slice';
  import {useState} from 'react';
  import Container from '../../components/Container';
  import Text from '../../components/Text';
  import Button from '../../components/Button';
  import {ImageBackground, StyleSheet, View, Image} from 'react-native';

  import BgLogin from '../../assets/BgLogin.png';
  import Logo from '../../assets/Logo_Ministerio_del_Deporte_de_Colombia_2022-2026.png';
  import Input from '../../components/Input';

  export default function HomeScreen() {
    const [form, setForm] = useState({email: '', password: ''});
    const dispatch = useDispatch();

    const doLogin = () => {
      dispatch(setSignIn({token: '1234'}));
    };

    return (
      <ImageBackground source={BgLogin} style={styles.background}>
        <View style={styles.card}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.formGroup}>
          <Input
            testID="usernameInput"
            placeholderText={'Email:'}
            onChangeText={text => {
              setForm({...form, email: text});
            }}
          />
          <Input
            testID="passwordInput"
            placeholderText={'Contraseña:'}
            secureTextEntry={true}
            onChangeText={text => {
              setForm({...form, password: text});
            }}
          />
        </View>

        <Button testID="loginButton" onPress={() => doLogin()}>
          <Text buttonText>Iniciar Sesión</Text>
        </Button>
              <Image
                source={require('../../assets/naowee_suitelogono.png')}
                style={styles.subLogo}
              />
      </ImageBackground>
    );
  }

  // Estilos
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formGroup: {
      width: '100%',
      padding: 20,
    },
    card: {
      position: 'absolute',
      top: 80,
      left: 0,
      backgroundColor: '#FFF',
      padding: 20,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      elevation: 5,
    },
    logo: {
      width: 170,
      height: 50,
      resizeMode: 'cover',
    },
    subLogo: {
      width: 120,
      height: 55,
      resizeMode: 'contain',
      position: 'absolute',
      bottom: 10,
      right: 0,
    },
  });
