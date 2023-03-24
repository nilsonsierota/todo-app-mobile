import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

const check = require("../../../assets/big-check.png");

export function NoTasksCard() {
  return (
    <>
      <View style={styles.container}>
        <Image source={check} style={styles.image} />
        <Text style={styles.text}>No Tasks</Text>
      </View>

      <View>
        <Text style={styles.smallText}>You're free to enjoy your day</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 4,
  },
  image: {
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  smallText: {
    width: 150,
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    paddingVertical: 20,
  },
});
