import React from 'react';
import { View, Image, Button } from 'react-native';
import { ScreenProps } from '../navigator/types';

const Screen2: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Image source={require('')} />
      <Button title="Ir a Screen 3" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
};

export default Screen2;