import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../redux/authSlice';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

function Navigation() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        return token;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token) {
      getToken().then(res => {
        dispatch(login(res));
      });
    }
  }, []);

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      {token ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default Navigation;
