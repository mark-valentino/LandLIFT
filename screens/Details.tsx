import * as React from 'react';
import {Pressable, View, Text} from 'react-native';

export function Details({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Page 1</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{backgroundColor: 'plum', padding: 10}}>
        <Text>Story</Text>
      </Pressable>
    </View>
  );
}
