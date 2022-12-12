import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../pages/SignIn'

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
    );
}