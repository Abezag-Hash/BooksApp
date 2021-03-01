import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttontext}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    height: 40,
    backgroundColor: COLORS.lightGray,
    marginBottom: 20,
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 100,
    paddingVertical: 15,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    justifyContent: "center",
  },
});
