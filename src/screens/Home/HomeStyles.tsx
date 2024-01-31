import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#242424',
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  btnContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  formContainer: {
    flex: 1,
    paddingTop: 80,
    width: '100%',
  }
});

export default styles;