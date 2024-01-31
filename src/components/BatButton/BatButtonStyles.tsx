import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 5,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FDFF00',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
  }
})