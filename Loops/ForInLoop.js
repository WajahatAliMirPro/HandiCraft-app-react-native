import React from "react";
import { View, Text } from "react-native";

export default function ForInLoop() {
  const student = { name: "Ali", age: 20, course: "Computer Science" };
  let items = [];

  for (let key in student) {
    items.push(`${key}: ${student[key]}`);
  }

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>For...In Loop (Object)</Text>
      {items.map((info, index) => (
        <Text key={index}>• {info}</Text>
      ))}
    </View>
  );
}
