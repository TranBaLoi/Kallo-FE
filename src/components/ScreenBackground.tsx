import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { GRADIENTS } from "../constants";

type ScreenBackgroundProps = { children: ReactNode };

export default function ScreenBackground({ children }: ScreenBackgroundProps) {
  return (
    <LinearGradient colors={GRADIENTS.background} style={styles.container}>
      <View pointerEvents="none" style={[styles.blob, styles.blobTopLeft]} />
      <View pointerEvents="none" style={[styles.blob, styles.blobTopRight]} />
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, overflow: "hidden" },
  blob: { borderRadius: 999, height: 280, position: "absolute", width: 280 },
  blobTopLeft: { backgroundColor: "rgba(134, 239, 172, 0.24)", left: -130, top: -120 },
  blobTopRight: { backgroundColor: "rgba(16, 185, 129, 0.14)", right: -130, top: 80 },
});
