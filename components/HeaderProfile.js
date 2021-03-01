import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

import { Avatar } from "react-native-elements";

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18 }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};

const HeaderProfile = ({ navigation }) => {
  const profileData = {
    name: "Username",
    rating: 4.5,
  };

  const [profile, setProfile] = React.useState(profileData);

  const onChange = (e) => {
    setSearchTerm(e?.nativeEvent?.text);
  };
  const onSearchClear = () => setSearchTerm("");

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            borderRadius: 10,
            padding: SIZES.padding,
            height: 100,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ ...FONTS.body4, color: COLORS.white }}> Back</Text>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}> Profile</Text>
          <Text style={{ ...FONTS.body4, color: COLORS.white }}> Messages</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={{ marginRight: SIZES.padding, alignItems: "center" }}>
              <Avatar
                size="large"
                title="UR"
                rounded
                overlayContainerStyle={{ backgroundColor: "grey" }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{ ...FONTS.h2, color: COLORS.white }}>
                {profile.name}
              </Text>
              <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                Rating: 4.5
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Header Section */}
      <View>{renderHeader(profile)}</View>
    </SafeAreaView>
  );
};

export default HeaderProfile;
