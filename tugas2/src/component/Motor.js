import React from 'react';
import { View, Text } from 'react-native';


var name = "Yamaha";
const Motor = () => {
    return (
       <View>
            <Text>Halo Selamat Datang Di Yamaha Motor</Text>
            <Text>Merek: {name}</Text>
            <Text>Type: {types.type}</Text>
            <Text>Model: {types.model}</Text>
            <Text>Harga: {types.harga}</Text>
       </View>
    );
}

export default Motor;

const types ={type:"Matic", model:"Vario", harga:15000};