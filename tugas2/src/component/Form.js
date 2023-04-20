import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Form () {
    return (
        <View style={{ padding: 20, flex: 1 }}>
            <View style={{ marginBottom: 20, borderWidth: 1, borderRadius: 10, width: 150, height: 150, alignSelf: 'center' }}>
                <Image source={require('../../assets/man.png')} style={{ width: 150, height: 150 }} />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text>NPM:</Text>
                <TextInput style={styles.inputText} placeholder="Enter your NPM" keyboardType="numeric" />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text>Fullname:</Text>
                <TextInput style={styles.inputText} placeholder="Enter your name here" />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text>Address:</Text>
                <View>
                    <TextInput style={styles.inputText} editable multiline numberOfLines={4} maxLength={40} />
                </View>
            </View>

            <View style={{ marginBottom: 20 }} >
                <Button title="button" />
            </View>

            <View style={{ marginBottom: 20 }} >
                <Button title="Opacity" />
            </View>

            <View style={{ marginBottom: 20 }} >
                <Button title="Highlight" />
            </View>

            <View style={{ marginBottom: 20 }} >
                <Button title="Feedback" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        borderWidth: 1,
        padding: 5
        
    }
})