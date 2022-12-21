import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import SignUp from '../../commom/auth';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (password !== passwordConfirmation) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, passwordConfirmation, passwordError]);

  async function handleRegister() {
    const response = await SignUp.Register(
      firstName,
      lastName,
      email,
      phone,
      password,
      passwordConfirmation,
    );
  }

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome"
          style={styles.input}
          onChange={setFirstName}
          value={firstName}
        />

        <Text style={styles.title}>Sobrenome</Text>
        <TextInput
          placeholder="Digite o seu sobrenome"
          style={styles.input}
          onChange={setLastName}
          value={lastName}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email"
          style={styles.input}
          onChange={setEmail}
          value={email}
        />

        <Text style={styles.title}>Celular</Text>
        <TextInput
          placeholder="Digite seu número de celular"
          style={styles.input}
          value={phone}
          onChange={setPhone}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite uma senha"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />

        <Text style={styles.title}>Confirme sua senha</Text>
        <TextInput
          placeholder="Confirme sua senha"
          secureTextEntry
          style={[
            styles.input,
            passwordError ? {borderColor: 'red'} : {borderColor: '#ccc'},
          ]}
          onChangeText={setPasswordConfirmation}
          value={passwordConfirmation}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.registerText}>Voltar para tela de login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  containerHeader: {
    marginTop: '5%',
    marginBottom: '5%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 0,
  },
  /*
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 5,
    fontSize: 16,
    marginLeft: 3,
  },*/
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#303030',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
  },
});
