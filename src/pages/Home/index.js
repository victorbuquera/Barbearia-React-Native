import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import store from '../../commom/store';
import {useSelector} from 'react-redux';

export default function HomeScreen() {
  const user = useSelector(state => state.user);

  function printToken() {
    console.log(user);
  }

  /*   function logout(){

  } */

  return (
    <View>
      <Text>HOME</Text>
      <Text>{JSON.stringify(user)}</Text>
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
