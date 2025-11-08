import React from "react";
import { View, Text } from "react-native";

export default function ForLoop() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  let items = [];

  for (let i = 0; i < fruits.length; i++) {
    items.push(fruits[i]);
  }

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>For Loop</Text>
      {items.map((fruit, index) => (
        <Text key={index}>• {fruit}</Text>
      ))}
    </View>
  );
}
