import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {useDispatch} from 'react-redux';
import Activity from '../../../components/Activity';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {fetchContent} from '../../../redux/authSlice';
import {spacing} from '../../../theme/spacing';
import styles from './Styles';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleLogin() {
    setLoading(true);
    dispatch(fetchContent({username, password})).then(res => {
      if (res.error) {
        setError('Invalid username or password!');
        setLoading(false);
      }
    });
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <Activity />
      </View>
    );
  }

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
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <Button title="LOGIN" onPress={handleLogin} />
    </SafeAreaView>
  );
}

export default Login;
