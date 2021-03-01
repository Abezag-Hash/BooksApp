import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import { connect } from "react-redux";
import { employeesFetch } from "./Actions/Actions.js";
import AddBook from "./AddBook";
import { Avatar } from "react-native-elements";

class Profile extends Component {
  state = {
    addBookPage: false,
  };

  current = {};

  componentWillMount() {
    this.props.employeesFetch();
    console.log("hiiii");
    // console.log(this.props);
    this.findCurrent(this.props.email);
  }
  componentWillReceiveProps(nextProps) {
    console.log("po");
    this.findCurrent(this.props.email);
    // console.log(nextProps);
  }

  findCurrent = (email) => {
    for (var i in this.props.employee) {
      if (this.props.employee[i].email == email) {
        this.current = this.props.employee[i];
      }
    }
  };

  renderPage() {
    if (this.state.addBookPage) {
      return (
        <View style={{ flex: 1 }}>
          <AddBook
            email={this.props.email}
            changeState={this.setState.bind(this)}
          ></AddBook>
        </View>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                height: 40,
                paddingLeft: 3,
                paddingRight: SIZES.radius,
                borderRadius: 20,
                width: 120,
                alignSelf: "flex-end",
              }}
              onPress={() => {
                this.setState({ addBookPage: true });
                // navigation.navigate('AddBook' , { email : this.props.email});
                console.log("Point");
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    source={icons.plus_icon}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </View>

                <Text
                  style={{
                    marginLeft: SIZES.base,
                    color: COLORS.white,
                    ...FONTS.body4,
                  }}
                >
                  Add book
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.titleBar}></View>

            <View style={{ alignSelf: "center" }}>
              <Avatar
                size="large"
                title="UR"
                rounded
                overlayContainerStyle={{ backgroundColor: "grey" }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            </View>

            <View style={styles.infoContainer}>
              <Text
                style={[
                  styles.text,
                  { color: "#FFFFFF", fontWeight: "200", fontSize: 25 },
                ]}
              >
                {this.current["name"]}
              </Text>
              <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
                {this.current["phone"]}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.logOut.signOut();
                  this.props.loggedState({ logged: false });
                }}
              >
                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 18 }]}>
                  Lmao
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 32 }}>
              <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.mediaImageContainer}>
                  <Image
                    source={require("../assets/images/the_metropolist.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </View>
                <View style={styles.mediaImageContainer}>
                  <Image
                    source={require("../assets/images/the_metropolist.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </View>
              </ScrollView>
            </View>
            <Text style={[styles.BasicInfo, styles.recent]}>
              Basic Information
            </Text>
            <View style={{ alignItems: "center" }}>
              <View style={{ width: 350, marginTop: 10 }}>
                <Text
                  style={[
                    styles.text,
                    { color: "#ffffff", fontWeight: "300", lineHeight: 22 },
                  ]}
                >
                  {this.current["about"]}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }

  render() {
    return <View style={{ flex: 1 }}>{this.renderPage()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  text: {
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
    padding: 12,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 30,
    marginTop: 32,
    marginBottom: 6,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  BasicInfo: {
    color: "#ffffff",
    fontSize: 18,
  },
  containers: {
    height: 100,
    width: 350,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFill,
  },
});

const mapStateToProps = (state) => {
  const employee = _.map(state.employee, (val, uid) => {
    return { ...val, uid };
  });

  return { employee };
};

export default connect(mapStateToProps, { employeesFetch })(Profile);
