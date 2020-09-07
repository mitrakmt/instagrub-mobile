import React from 'react';
import {Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Login"
      onPress={() => navigation.navigate('Login', {name: 'Jane'})}
    />
  );
};

export default HomeScreen;
