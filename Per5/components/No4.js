import React, { useState } from 'react';
import {View,Text,TextInput,SafeAreaView } from 'react-native';

const No4= () => {
    const [title,SetTitle] =useState("Sedang Melaksanakan Quis")
    return (
   <SafeAreaView>
    <View>
        <Text>{title}</Text>
    </View>

    <View>
        <Text>input text</Text>
        <TextInput
        placeholder="Enter title here"
        defaultValue="{title}"
        onChangeText={(text)=> SetTitle(text)}
        style={{ borderWidth: 2, borderColor: 'black', padding: 7, marginBottom: 20 }}/>

    </View>

   </SafeAreaView>
    );
}

export default No4;