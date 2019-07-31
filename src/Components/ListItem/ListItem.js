import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = props => (
  <View style={styles.listItem}>
    <Text styçe={styles.textCenter}>{props.filmName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    height: 50,
    backgroundColor: "#212921",
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center"
  },
  textCenter: {
    color: "white",
    textAlign: "center",
    fontSize: 14
  }
});

export default ListItem;
