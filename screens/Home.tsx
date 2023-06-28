import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {FormField} from '../components/FormField';

export function Home({navigation}: {navigation: any}) {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#fff',
        padding: 16,
      }}>
      <FormField labelText="Email" isSecure={false} />
      <FormField labelText="Password" isSecure />

      <Pressable
        onPress={() => navigation.navigate('Details')}
        style={{backgroundColor: 'plum', padding: 10, width: '100%'}}>
        <Text>Story</Text>
      </Pressable>
    </View>
  );
}
