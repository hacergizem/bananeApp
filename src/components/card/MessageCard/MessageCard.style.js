import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const dimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: dimensions.height / 5,
    borderColor: '#184461',
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  user_container: {
    backgroundColor: '#184461',
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 2,
  },
  username: {
    color: 'white',
  },
  date: {
    color: 'white',
  },
  content: {
    backgroundColor: 'white',
    color: colors.darkblue,
    padding: 10,
    fontSize: 14,
    flex: 5,
  },
  dislike_container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flex: 3,
    paddingBottom: 10,
    paddingRight: 10,
  },
  dislike_text: {
    color: 'white',
  },
  dislike_counter: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkred,
    marginRight: 10,
  },
  dislike_button: {
    height: 30,
    backgroundColor: colors.darkblue,
    color: 'white',
    borderRadius: 7,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },
});
