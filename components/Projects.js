import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Projects() {
  const projects = [
    { id: 1, name: "Smart Doctor App", desc: "AI-powered disease prediction app." },
    { id: 2, name: "Pneumonia Detector", desc: "Deep learning model for chest X-rays." },
    { id: 3, name: "Road Sign Detector", desc: "YOLOv8-based traffic sign recognition." },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Projects</Text>
      {projects.map((p) => (
        <View key={p.id} style={styles.card}>
          <Text style={styles.projectName}>{p.name}</Text>
          <Text style={styles.desc}>{p.desc}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  projectName: { fontSize: 16, fontWeight: "bold", color: "#0077b6" },
  desc: { fontSize: 14, color: "#444" },
});
