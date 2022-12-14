import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../../commom/reducers/store';

export default function Welcome() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        store.dispatch({type: 'LOGIN', loggedIn: true});
      } else {
        store.dispatch({type: 'LOGOUT', loggedIn: false});
      }
    };
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}>
        <Text style={styles.title}>
          Agende atendimentos e aproveite descontos exclusivos no App!
        </Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C3849',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#3C3849',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#303030',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
