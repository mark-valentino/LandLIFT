import * as React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

export function Home({navigation}: {navigation: any}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <TextInput style={{backgroundColor: 'red', width: '100%'}} />
      <TextInput style={{backgroundColor: 'red', width: '100%'}} />
      <Text>Page 2</Text>
      <Pressable
        onPress={() => navigation.navigate('Details')}
        style={{backgroundColor: 'plum', padding: 10, width: '100%'}}>
        <Text>Story</Text>
      </Pressable>
    </View>
  );
}
