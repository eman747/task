import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {spacing} from '../theme/spacing';
import palette from '../theme/palette';

function Button(props) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.titleText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.large,
    borderColor: palette.secondary,
    backgroundColor: palette.yellow,
  },
  titleText: {
    fontSize: 16,
    color: palette.secondary,
  },
});
