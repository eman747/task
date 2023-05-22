import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/main/Cart/Cart';
import ProductDetail from '../screens/main/Product/ProductDetail';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
