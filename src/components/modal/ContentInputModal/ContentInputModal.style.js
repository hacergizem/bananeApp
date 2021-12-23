import {StyleSheet, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: dimensions.height / 3,
  },
  modal_container: {
    padding: 0,
    margin: 10,
    marginBottom: 0,
    justifyContent: 'flex-end',
  },
  input_container: {
    flex: 1,
  },
  text_input: {
    color: colors.darkblue,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
