import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
import { fetchUsers } from "../services/UserService";

export default function UsersScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <View>
      <Text>Users</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <UserList name={item.name} email={item.email} />
        )}
      />
    </View>
  );
}
