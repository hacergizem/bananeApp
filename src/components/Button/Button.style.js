import {StyleSheet, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');

import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  body_container: {
    width: dimensions.width / 2,
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default {
  primaryStyle: StyleSheet.create({
    ...base_style,
    body_container: {
      ...base_style.body_container,
      backgroundColor: colors.darkblue,
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
  secondaryStyle: StyleSheet.create({
    ...base_style,
    body_container: {
      ...base_style.body_container,
      backgroundColor: 'white',
      borderColor: colors.darkblue,
      borderWidth: 1,
    },
    text: {
      ...base_style.text,
      color: colors.darkblue,
    },
  }),
};
