import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./BatInputStyles";


export function BatInput(props: TextInputProps) {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{props.returnKeyLabel ?? ""}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#D3D3D3"
        {...props}
      />
  </View>
  );
}