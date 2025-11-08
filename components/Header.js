import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/profile.jpg")} style={styles.image} />
      <Text style={styles.name}>Sher Ali Shahid</Text>
      <Text style={styles.title}>Data Scientist | React Native Developer</Text>

      <View style={styles.social}>
        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/")}>
          <AntDesign name="github" size={28} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://linkedin.com/")}>
          <AntDesign name="linkedin-square" size={28} color="#0e76a8" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("mailto:sherali@example.com")}>
          <Entypo name="mail" size={28} color="red" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#0077b6",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  social: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 8,
  },
});
