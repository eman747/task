import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import palette from '../theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Searchbar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor={palette.gray}
        />
        <View style={styles.icon}>
          <Ionicons name="search" size={20} color={palette.black} />
        </View>
      </View>
    </View>
  );
}

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.secondary,
  },
  textInputContainer: {
    height: 40,
    width: '95%',
    borderRadius: 7,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: palette.white,
  },
  textInput: {
    width: '90%',
  },
  input: {
    color: palette.white,
    fontSize: 14,
  },
  icon: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
