import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import palette from '../theme/palette';
import {spacing} from '../theme/spacing';

function Input(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={palette.gray}
        {...props}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.mini,
    alignItems: 'center',
  },
  textInput: {
    height: 55,
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: spacing.mini,
    color: palette.black,
    borderColor: palette.secondary,
    backgroundColor: palette.white,
  },
});
