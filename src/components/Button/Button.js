import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './Button.style';

const Button = ({text, onPress, loading, icon, theme = 'primaryStyle'}) => {
  return (
    <TouchableOpacity
      loading={loading}
      style={styles[theme].container}
      onPress={onPress}>
      <View style={styles[theme].body_container}>
        <Text style={styles[theme].text}>
          {loading ? <ActivityIndicator size="small" color="white" /> : text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
