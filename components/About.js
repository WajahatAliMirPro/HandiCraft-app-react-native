import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>About Me</Text>
      <Text style={styles.text}>
        I am a passionate developer with expertise in Machine Learning,
        React Native, and Data Analytics. My focus is on building scalable,
        user-friendly, and intelligent applications that solve real-world problems.
      </Text>
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
  text: { fontSize: 16, lineHeight: 22, color: "#444" },
});
