import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Authentication/Login/Login';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
