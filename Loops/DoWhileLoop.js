import React from "react";
import { View, Text } from "react-native";

export default function DoWhileLoop() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  let items = [];
  let i = 0;

  do {
    items.push(fruits[i]);
    i++;
  } while (i < fruits.length);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Do...While Loop</Text>
      {items.map((fruit, index) => (
        <Text key={index}>• {fruit}</Text>
      ))}
    </View>
  );
}
