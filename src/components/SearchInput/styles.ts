import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    top: 10,
  },
  textInputContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  textInput: {
    height: 50,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  listView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default styles;
