import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {useDispatch} from 'react-redux';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {fetchContent} from '../../../redux/authSlice';
import {spacing} from '../../../theme/spacing';
import styles from './Styles';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login Here</Text>
      </View>
      <View style={{marginTop: spacing.medium}}>
        <Input
          value={username}
          onChangeText={text => setUsername(text)}
          placeholder={'username'}
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholder={'password'}
        />
      </View>
      <Button
        title="LOGIN"
        onPress={() => {
          dispatch(fetchContent({username, password}));
        }}
      />
    </SafeAreaView>
  );
}

export default Login;
