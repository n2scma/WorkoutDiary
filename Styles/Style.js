import { StyleSheet } from 'react-native';
const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-top',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  workoutButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    width: 80,
  },
  buttonIcon: {
    margin: 4,
  },
  buttonLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    marginTop: 8,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default Style;
