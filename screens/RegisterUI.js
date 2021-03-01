import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import RegisterForm from "../components/RegisterForm";
export default class LoginUI extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
        <View
          style={{
            alignItems: "center",
            paddingVertical: SIZES.padding2,
          }}
        >
          <Text style={{ ...FONTS.h1, color: COLORS.white }}>Sign Up</Text>
        </View>
        <View styles={styles.artContainer}>
          <Image source={images.otherWordsForHome} style={styles.logo} />
        </View>
        <RegisterForm></RegisterForm>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  artContainer: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 300,
    borderRadius: 10,
    alignSelf: "center",
  },
});
