import React from "react";
import { View, Text } from "react-native";

export default function WhileLoop() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  let items = [];
  let i = 0;

  while (i < fruits.length) {
    items.push(fruits[i]);
    i++;
  }

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>While Loop</Text>
      {items.map((fruit, index) => (
        <Text key={index}>• {fruit}</Text>
      ))}
    </View>
  );
}
