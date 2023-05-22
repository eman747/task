import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import mainStyles from '../Home/Styles';
import Header from '../../../components/Header';
import ProductComponent from '../../../components/ProductComponent';
import {removeFromCart} from '../../../redux/cartSlice';
import styles from './Styles';

function Cart() {
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        id: key,
        title: state.cart.items[key].title,
        price: state.cart.items[key].price,
        Qty: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
        images: state.cart.items[key].images,
      });
    }
    return transformedCartItems;
  });

  function handleItemRemove(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <SafeAreaView style={mainStyles.container}>
      <Header centeredTitle="Cart" noCart />
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ProductComponent
              item={item}
              delete
              onPressDelete={() => handleItemRemove(item.id)}
            />
          )}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text style={styles.totalPriceText}>
                Total: ${cartTotalAmount}
              </Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.body}>
          <Text style={styles.noItemsText}>Empty Cart</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Cart;
