import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Router() {
  const loggedIn = useSelector(state => state.loggedIn);

  return (
    <NavigationContainer>
      {loggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
