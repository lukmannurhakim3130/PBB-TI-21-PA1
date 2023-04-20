import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Latihan1 = () => {
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <Image source={require('../../assets/profile.png')} style={styles.img} />
      
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
        }}
      >
        History of Bicycle
      </Text>
      <Text style={styles.paragrapf}>
        A Bicycle,Also Called a pedal cycle,bike,push-bike, or cycle, is a 
        human-powered or motor powered assisted, single-track vehicle having 
        two wheels attached to a frame ,one behind the other.A bicycle rider
        is called a cyclist. or bicyclist
      </Text>
      </View>
    </View>
  );
};

export default Latihan1 ;

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
  box: {
    width: 200,
  },

  img: {
    width: 128,
    height: 128,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
  },

  container:{
    padding: 10,
    flex:1,
    alignItems:"centers"
  }
});