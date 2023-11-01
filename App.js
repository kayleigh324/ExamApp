import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exam from './Components/Exam';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Google Cloud Associate Cloud Engineer </Text>
      <Text>Exam questions</Text>
      <Exam />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    marginTop: 18
  }
});
