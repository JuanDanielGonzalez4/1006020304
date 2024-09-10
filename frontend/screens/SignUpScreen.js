import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

export default function SignUpScreen() {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const handleSignUp = () => {
    fetch("http://192.168.92.42:8000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
  };

  return (
    <View>
      <Text>Sign Up</Text>

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder="Name"
      />
      <Text>email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="Email"
      />
      <Text>password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        placeholder="Password"
      />

      <Pressable onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
