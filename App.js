import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import index from './screens/index';
import Login from './screens/login';
import Signup from './screens/signup';
import Home from './screens/Home';
import LearningStyles from './screens/LearningStyles';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function LoginStack () {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Learningstyles" component={LearningStyles} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer initialRouteName={index}>
        <Drawer.Navigator >
          <Drawer.Screen name="Index" component={index} />
          <Drawer.Screen name="LoginStack" component={LoginStack} options={{ drawerLabel: 'Ingresar'}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}