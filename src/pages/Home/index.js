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
      </TouchableOpacity>
    </View>
  );
}
