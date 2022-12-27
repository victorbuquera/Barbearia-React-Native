import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import store from '../../commom/store';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const state = store.getState();
  const token = state.user.token;

  async function printToken() {
    try {
      const storageToken = await AsyncStorage.getItem('token');
      console.log(storageToken);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <Text>HOME</Text>
      <TouchableOpacity onPress={printToken}>
        <Text>Botão</Text>
      </TouchableOpacity>
    </View>
  );
}
//TO DO LIST
//Armazenar token no local storage e testar se o app desloga quando é fechado e aberto novamente
//CRIAR NOVA BRANCH PARA LOGOUT
//Definir função de logout
