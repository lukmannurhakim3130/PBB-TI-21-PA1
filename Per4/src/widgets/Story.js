import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import {UserObj } from "../ConstData";

function UserItem({ item }) {
    return (
        <View style={{ marginHorizontal: 8, marginVertical: 8 }}>
            <Image style={{ ...style.img, borderWidth: ((item.is_view) ? 2 : 0) }} source={(item.gender === "M") ? require("../../assets/images/boy.png") : require("../../assets/images/girl.png")} />
            <Text style={{ textAlign: "center", color: "black" }}>{item.name}</Text>
        </View>
    );
}

const Story = () => {
    return (
        <FlatList horizontal={true} data={UserObj} renderItem={({ item }) => <UserItem item={item} />} />
    );
};

export default Story;

const style = StyleSheet.create({
    img: {
        width: 60,
        height: 60,
        borderColor: "red",
        borderRadius: 100
    }
})