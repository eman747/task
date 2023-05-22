import React from 'react';
import {Image, Text, View, SafeAreaView} from 'react-native';

import {useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';
import styles from './Style';
import Header from '../../../components/Header';
import mainStyles from '../Home/Styles';
import {spacing} from '../../../theme/spacing';
import Button from '../../../components/Button';
import {addToCart} from '../../../redux/cartSlice';

function ProductDetail(props) {
  const {item} = props.route.params;
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(item));
  }

  return (
    <SafeAreaView style={mainStyles.container}>
      <Header centeredTitle="Product Detail" />
      <View style={styles.body}>
        <FastImage source={{uri: item.images[0]}} style={styles.image} />
        <View style={{marginTop: spacing.small}}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <View style={{marginTop: spacing.small}}>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button title="Add To Cart" onPress={handleAddToCart} />
      </View>
    </SafeAreaView>
  );
}

export default ProductDetail;
