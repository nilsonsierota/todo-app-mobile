import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Theme } from "../../themes";

type Props = {
  label: string;
};

export function Button({ label }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    color: "white",
  },
});
