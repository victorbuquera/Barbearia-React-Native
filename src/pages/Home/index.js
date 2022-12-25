import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import store from '../../commom/store';
import axios from 'axios';

export default function HomeScreen() {
  const state = store.getState();
  const token = state.user.token;

  function printToken() {
    alert(JSON.stringify(state));
  }
  return (
    <View>
      <Text>HOME</Text>
      <TouchableOpacity onPress={printToken}>
        <Text>Botão</Text>
        <Text>{state.value}</Text>
      </TouchableOpacity>
    </View>
  );
}
//TO DO LIST
//Armazenar token no local storage e testar se o app desloga quando é fechado e aberto novamente
//CRIAR NOVA BRANCH PARA LOGOUT
//Definir função de logout
