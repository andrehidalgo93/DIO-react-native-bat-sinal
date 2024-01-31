import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./BatSendButtonStyled";

export function BatSendButton(props: TouchableOpacityProps) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        {...props}
        >
          <Text style={styles.text}>ENVIAR</Text>
        </TouchableOpacity>
    </>
  );
}