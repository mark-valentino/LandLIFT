import * as React from 'react';
import {Pressable, View, Text} from 'react-native';

export function Home({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Page 2</Text>
      <Pressable
        onPress={() => navigation.navigate('Details')}
        style={{backgroundColor: 'plum', padding: 10}}>
        <Text>Story</Text>
      </Pressable>
    </View>
  );
}
