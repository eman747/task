import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from './TabBar';
import Home from '../screens/main/Home/Home';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const [tabBarVisible, setTabBarVisible] = useState(true);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => (
        <TabBar
          {...props}
          name="home"
          tabBarVisible={tabBarVisible}
          setTabBarVisible={setTabBarVisible}
        />
      )}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
