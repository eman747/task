import {FlatList, SafeAreaView, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import styles from './Styles';
import {fetchProducts, searchByTitle} from '../../../redux/productSlice';
import ProductComponent from '../../../components/ProductComponent';
import Activity from '../../../components/Activity';

function Home({navigation}) {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const products = useSelector(state => state.product.products);
  const search = useSelector(state => state.product.search);

  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  function onChangeText(query) {
    setSearchText(query);
    dispatch(searchByTitle({products, query}));
  }

  function onPressProduct(item) {
    navigation.navigate('ProductDetail', {item: item});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'E-Commerce'} />
      <SearchBar
        placeholder="Search"
        value={searchText}
        onChangeText={onChangeText}
      />
      <View style={styles.body}>
        {loading === false ? (
          <FlatList
            data={search.length !== 0 ? search : products}
            numColumns={2}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <View style={{height: 150}} />}
            renderItem={({item}) => (
              <ProductComponent
                item={item}
                onPress={() => onPressProduct(item)}
              />
            )}
          />
        ) : (
          <Activity />
        )}
      </View>
    </SafeAreaView>
  );
}

export default Home;
