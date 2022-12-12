import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'


export default function RegisterScreen(){
    return (
        <View>
           
           <Animatable.View style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

        </View>
    )
}