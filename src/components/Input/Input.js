import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, value, onType, isSecure}) => {
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        onChangeText={onType}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
