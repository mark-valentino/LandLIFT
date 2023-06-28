import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Text} from 'react-native';

export const FormField = (props: {labelText: string; isSecure: boolean}) => {
  const localStyle = StyleSheet.create({
    wideTextInput: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#D9D9D9',
      borderRadius: 4,
    },
    inputLabel: {
      color: '#000',
      marginBottom: 8,
    },
  });

  return (
    <>
      <Text style={localStyle.inputLabel}>{props.labelText}</Text>
      <TextInput
        style={localStyle.wideTextInput}
        secureTextEntry={props.isSecure}
      />
    </>
  );
};
