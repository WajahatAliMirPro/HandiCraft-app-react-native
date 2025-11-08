
import React from "react";
import { View, Text } from "react-native";

export default function ForEachLoop() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  let items = [];

  fruits.forEach(fruit => {
    items.push(fruit);
  });

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>forEach Loop</Text>
      {items.map((fruit, index) => (
        <Text key={index}>• {fruit}</Text>
      ))}
    </View>
  );
}
