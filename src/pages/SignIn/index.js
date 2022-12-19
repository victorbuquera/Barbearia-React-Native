import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {auth} from '../../commom/auth';
import Login from '../Home';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  async function handleAccess() {
    const response = await Login.auth(email, password);
    try {
      if (response.success) {
        console.log('deu certo');
      } else {
        console('Usuário ou senha inválido');
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email"
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          secureTextEntry
          placeholder="Digite uma senha"
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleAccess}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonForgot}
          onPress={() => navigation.navigate('Forgot')}>
          <Text style={styles.forgottenText}>Esqueceu sua senha?</Text>
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
    marginTop: '14%',
    marginBottom: '8%',
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
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
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
  buttonForgot: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerText: {
    color: '#a1a1a1',
    fontSize: 15,
  },
  forgottenText: {
    color: '#a1a1a1',
    fontSize: 17,
  },
});
