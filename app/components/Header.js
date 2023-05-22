import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import palette from '../theme/palette';
import {spacing} from '../theme/spacing';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice';

function Header(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(logout());
  }

  return (
    <View style={styles.container}>
      {props.title ? (
        <View>
          <Text style={styles.headerTitleText}>{props.title}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color={palette.black} />
        </TouchableOpacity>
      )}
      {props.centeredTitle && (
        <View>
          <Text style={styles.headerTitleText}>{props.centeredTitle}</Text>
        </View>
      )}
      <View style={styles.row}>
        {props.title && (
          <TouchableOpacity onPress={onLogout}>
            <MaterialIcons name="logout" size={20} color={palette.black} />
          </TouchableOpacity>
        )}
        {!props.noCart ? (
          <TouchableOpacity
            style={{marginLeft: spacing.mini}}
            onPress={() => navigation.navigate('Cart')}>
            <Ionicons name="cart-outline" size={20} color={palette.black} />
          </TouchableOpacity>
        ) : (
          <View style={{width: 20}} />
        )}
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: palette.white,
    marginTop: StatusBar.currentHeight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: palette.black,
  },
});
