import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Albums</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: "#F8F8F8"
  }
});

export default Header;
