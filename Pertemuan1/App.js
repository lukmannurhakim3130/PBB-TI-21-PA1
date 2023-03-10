import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
    <Text style={styles.paragraph}>
      <Image source={require('./M.png')}
         style={{width: 200, height: 200 ,borderRadius : 100}} /> </Text>
     <Text>Nama    : lukman nurhakim</Text>
      <Text>Alamat: Yasmin barat</Text>
      <Text>Nim   : 212310002</Text>
      <Text>No Telp: 110</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
