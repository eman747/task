import React, {useState, useCallback, useEffect} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import palette from '../theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function TabBar({navigation, name, tabBarVisible, setTabBarVisible}) {
  const [color, setColor] = useState([palette.black, palette.gray]);

  const keyboardDidShow = useCallback(() => {
    setTabBarVisible(false);
  }, [navigation]);

  const keyboardDidHide = useCallback(() => {
    setTabBarVisible(true);
  }, [navigation]);

  useEffect(() => {
    const focus = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const blur = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      focus.remove();
      blur.remove();
    };
  }, []);

  if (!tabBarVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => {
          setColor([palette.black, palette.gray]);
        }}>
        <Ionicons name="home" color={color[0]} size={20} />
        <Text style={[styles.text, {color: color[0]}]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => {
          setColor([palette.gray, palette.black]);
        }}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          color={color[1]}
          size={20}
        />
        <Text style={[styles.text, {color: color[1]}]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: palette.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
