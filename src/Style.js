import React from "react";
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const width = Dimensions.get("window").width;
const toolbarHeight = Platform.OS === "ios" ? 64 : 56;
const headerHeight = Header.height;
const height = Dimensions.get("window").height - toolbarHeight;
const AddButtonPosX = width / 2 - 30 + 0.5;
const AddButtonPosY = height * 0.7;

const styles = StyleSheet.create({
  AddButton: {
    position: "absolute",
    top: AddButtonPosY,
    left: AddButtonPosX,
  },
  Header: {
    backgroundColor: "#00d54b",
  },
  HeaderText: {
    color: "#fff",
    fontSize: 24,
  },
  NumberPad: {
    position: "absolute",
    width: width,
    height: 400,
    left: 0,
    top: height * 0.2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  IconCenter: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  Key: {
    width: width / 3,
    height: 100,
    justifyContent: "center",
    backgroundColor: "#f3f2f3",
  },
  KeyText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  PickerContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  Picker: {
    width: width / 2,
    height: 40,
  },
  SettingsButton: {},
  SettingsIcon: {},
  StatPicker: {},
  TimeframePicker: {},
  Amount: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
    top: height * 0.1 - 22.5,
  },
  AddTip: {
    position: "absolute",
    top: height * 0.75,
    left: width / 2 - 40,
  },
});

export default styles;
