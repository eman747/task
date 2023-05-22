import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataToStorage = token => {
  AsyncStorage.setItem('token', JSON.stringify(token)).then(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  });
};

export const removeData = () => {
  AsyncStorage.removeItem('token');
};
