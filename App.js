import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import index from './screens/index';
import Login from './screens/login';
import Signup from './screens/signup';
import Home from './screens/Home';
import LearningStyles from './screens/LearningStyles';
import VocationalTest from './screens/VocationalTest';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={screenOptions} />
      <Stack.Screen name="Signup" component={Signup} options={screenOptions} />
      <Stack.Screen name="Home" component={Home} options={screenOptions} />
      <Stack.Screen name="Learningstyles" component={LearningStyles} options={screenOptions} />
      <Stack.Screen name="VocationalTest" component={VocationalTest} options={screenOptions} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer initialRouteName={index}>
      <Drawer.Navigator screenOptions={drawerScreenOptions}>
        <Drawer.Screen name="Index" component={index} />
        <Drawer.Screen name="LoginStack" component={LoginStack} options={{ drawerLabel: 'Ingresar' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const drawerScreenOptions = {
  drawerStyle: {
    backgroundColor: '#E6F5E6',  // Fondo del drawer
    width: 240,
  },
  drawerActiveTintColor: '#fff',  // Color del texto para el item activo
  drawerActiveBackgroundColor: '#006400',  // Fondo del item activo
  drawerInactiveTintColor: '#006400',  // Color del texto para los items inactivos
  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#E6F5E6',
  },
  headerTintColor: '#006400',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
