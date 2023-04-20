import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    if (email === "212310002@student.ibik.ac.id" && password === "123") {

      setLoggedIn(true);
    } else {
      alert("Login failed");
    }
  };
  if (loggedIn) {
    return (
      <View>
        <Text>Welcome to Home Page</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Email </Text>
        <TextInput
          placeholder="npm@student.ibik.ac.id"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.text_input}
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Password</Text>
        <View
          style={{
            ...styles.text_input,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            secureTextEntry={true}
            placeholder="Enter your password"
            autoCorrect={false}
            style={{ ...styles.text_input, borderWidth: 0, padding: 0, width: "90%" }}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable>
            <FontAwesome5 name={"eye"} size={25} color="grey" />
          </Pressable>
        </View>
      </View>
      <TouchableOpacity style={styles.btn_signin} onPress={() => handleSignIn()}>
        <Text style={styles.btn_signin_text}>LogIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  frm_row: { marginBottom: 15 },
  text_label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  text_input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "grey",
  },
  btn_signin: {
    backgroundColor: "pink",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  btn_signin_text: { color: "white", textAlign: "center", fontSize: 16 },
});