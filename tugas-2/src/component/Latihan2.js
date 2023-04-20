import React from 'react';
import { View,Text, StyleSheet, Image } from 'react-native';

const Latihan2 = () => {
  return (
      <View style={style.body}>
        <View style={{flex:1, justifyContent: "center"}}>
           <Image source={require('../../assets/LOGO_IBIK.png')} style={{width:100, height:100}} />
        </View>
        <Text style={{marginBottom: 100, color:'white'}}>loading...</Text>
      </View>
  );
}

export default Latihan2;

const style = StyleSheet.create({
  body :{
    flex:1,
    alignItems: 'center',
    backgroundColor: "grey"
  }
})