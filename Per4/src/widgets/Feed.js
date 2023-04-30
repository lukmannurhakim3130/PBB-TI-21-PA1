import { StyleSheet, View, Text, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { UserObj } from "../ConstData";
import React from "react";

{/* <View style={{ marginHorizontal: 8, marginVertical: 8 }}>
            <Image style={{ ...style.img, borderWidth: ((item.is_view) ? 2 : 0) }} source={
                (item.gender === "M") ? require("../../assets/images/boy.png") : require("../../assets/images/girl.png")
            } /> */}

const FeedItem = ({ item }) => {
    return (
        <View>
            <View style={style.profileContainer}>
                <View style={style.profileBox}>
                    <Image style={style.feedProfilePicture} source={(item.gender === "M") ? require("../../assets/images/boy.png") : require("../../assets/images/girl.png")} />
                    <Text style={style.feedUsername}>{item.username}</Text>
                </View>
                <View>
                    <FontAwesome5 name={"expand-alt"} color="black" size={25} />
                </View>
            </View>
            <View style={style.feedImagePost}>
                <Image style={{width: 360, height: 360}} source={(item.img)} />
            </View>
            <View style={style.feedAction}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name={"heart"} color="black" size={25} />
                    <FontAwesome5 name={"comment-dots"} color="black" size={25} style={{ marginHorizontal: 15 }} />
                    <FontAwesome5 name={"paper-plane"} color="black" size={25} />
                </View>
                <View>
                    <FontAwesome5 name={"bookmark"} color="black" size={25} />
                </View>
            </View>
            <View style={{ marginTop: 8, paddingHorizontal: 8 }}>
                <Text style={{ color: "black" }}><Text style={{ color: "black", fontWeight: "bold" }}>{item.username}</Text> {(item.cap)}</Text>
            </View>
        </View>
    )
}

const Feed = () => {
    return (
        <View>
            {UserObj.map((v, index) => (
                <FeedItem item={v} key={index} />
            ))}
        </View>
    );
};

export default Feed;

const style = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal: 8,
        justifyContent: "space-between"
    },
    profileBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    feedProfilePicture: {
        width: 45,
        height: 45,
        borderRadius: 100
    },
    feedUsername: {
        color: "black",
        marginLeft: 10,
        fontWeight: "bold"
    },
    feedImagePost: {
        marginTop: 8
    },
    feedAction: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingHorizontal: 8
    }
})