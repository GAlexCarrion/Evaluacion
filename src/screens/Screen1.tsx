import React from 'react';
import { View, Button } from 'react-native';
import { ScreenProps } from '../navigator/types';

const Screen1: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Button title="Imagen 1" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Imagen 2" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
};

export default Screen1;
