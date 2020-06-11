/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';

const App = () => {
  const onPress = () => {
    Alert.alert('This is an alert');
  };
  return (
    <TouchableOpacity style={{ backgroundColor: 'blue' }} onPress={onPress}>
      <View>
        <Text style={{ color: 'white' }}>Alert is not shown when running on Android device - Galaxy S8</Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;
