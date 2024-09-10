import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function UserList({ name, email }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
