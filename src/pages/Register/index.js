import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function RegisterScreen() {
  const [firstName, setFirtsName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);

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
          value={firstName}
        />

        <Text style={styles.title}>Sobrenome</Text>
        <TextInput
          placeholder="Digite o seu sobrenome"
          value={lastName}
          style={styles.input}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email"
          style={styles.input}
          value={email}
        />

        <Text style={styles.title}>Celular</Text>
        <TextInput
          placeholder="Digite seu número de celular"
          style={styles.input}
          value={email}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite uma senha"
          style={styles.input}
          value={password}
        />

        <Text style={styles.title}>Confirme sua senha</Text>
        <TextInput
          placeholder="Confirme sua senha"
          style={styles.input}
          value={passwordConfirmation}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
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
    fontSize: 20,
    marginTop: 10,
    marginLeft: 0,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 5,
    fontSize: 16,
    marginLeft: 3,
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
