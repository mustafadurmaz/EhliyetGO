import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>EhliyetGo - Ana Sayfa</Text>
      <Button title="Testlere Git" onPress={() => navigation.navigate('Test')} />
      {/* <Button title="Teste Başla" onPress={() => navigation.navigate('Quiz')} /> */}
    </View>
  );
}
