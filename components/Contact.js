import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Contact</Text>
      <Text style={styles.text}>📧 Email: sherali@example.com</Text>
      <Text style={styles.text}>📱 Phone: +92-300-1234567</Text>
      <Text style={styles.text}>📍 Location: Islamabad, Pakistan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginBottom: 20,
  },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 5, color: "#444" },
});
