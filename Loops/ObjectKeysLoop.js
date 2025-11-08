import React from "react";
import { View, Text } from "react-native";

export default function ObjectKeysLoop() {
  const student = { name: "Ali", age: 20, course: "Computer Science" };
  let items = [];

  Object.keys(student).forEach(key => {
    items.push(`${key}: ${student[key]}`);
  });

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Object.keys + forEach</Text>
      {items.map((info, index) => (
        <Text key={index}>• {info}</Text>
      ))}
    </View>
  );
}
