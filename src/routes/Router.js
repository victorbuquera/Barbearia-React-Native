import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
