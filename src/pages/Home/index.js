import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import store from '../../commom/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

export default function HomeScreen() {
  const state = store.getState();
  const dispatch = useDispatch();

  async function printToken() {
    try {
      const storageToken = await AsyncStorage.getItem('token');
      console.log(storageToken);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    try {
      // Dispara a ação de logout
      dispatch({type: 'LOGOUT'});

      // Remove o token do armazenamento do aplicativo
      await AsyncStorage.removeItem('token');
    } catch (error) {
      throw error;
    }
  }

  return (
    <View>
      <Text>HOME</Text>
      <TouchableOpacity onPress={printToken}>
        <Text>Botão</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}></TouchableOpacity>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}
//TO DO LIST
//Armazenar token no local storage e testar se o app desloga quando é fechado e aberto novamente
//CRIAR NOVA BRANCH PARA LOGOUT
//Definir função de logout
