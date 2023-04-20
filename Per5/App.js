import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CardMenu from './components/CardMenu';
import MyCalender from './components/MyCalender';
import No4 from './components/No4';
import LogIn from './components/LogIn';


export default function App() {
  return (
   <SafeAreaView>
    {/* <No4/> */}
    {/* <LogIn/> */}
    <MyCalender/>
   </SafeAreaView>
  );
}

