import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import palette from '../theme/palette';
import {spacing} from '../theme/spacing';

function ProductComponent(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={{uri: props.item.images[0]}} style={styles.image} />
      <View style={{marginTop: spacing.mini}}>
        <Text style={styles.title}>{props.item.title}</Text>
      </View>
      <View style={{marginTop: spacing.mini}}>
        <Text style={styles.price}>${props.item.price}</Text>
      </View>
      <View style={styles.footer}>
        {props.item.Qty && (
          <View>
            <Text style={styles.title}>Quantity: {props.item.Qty}</Text>
          </View>
        )}
        {props.delete && (
          <TouchableOpacity onPress={props.onPressDelete}>
            <MaterialCommunityIcons
              name="delete-forever-outline"
              size={26}
              color={palette.black}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default ProductComponent;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2.39,
    height: 200,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    backgroundColor: palette.white,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    color: palette.black,
  },
  price: {
    fontWeight: '900',
    fontSize: 14,
    color: palette.black,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
