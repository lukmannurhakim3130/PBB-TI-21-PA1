import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Car from './src/component/Car';
import Motor from './src/component/Motor';
import Sepeda from './src/component/Sepeda';
import Form from './src/component/Form';


export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>
   {/* <Car/> */}
    {/* <Form /> */}
    {/* <Motor/> */}
    <Sepeda/>
  </ScrollView>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});