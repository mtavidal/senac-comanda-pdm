import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sistema</Text>
      <Text style={styles.title}>Comanda</Text>
      <TextInput placeholder='e-mail' style={styles.input} />
      <TextInput placeholder='senha' style={styles.input} secureTextEntry />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#121a2c',
    fontSize: 24,
    fontWeight: 'bold'

  },
  input: {
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4
  }
});
