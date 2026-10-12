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
  blob: { borderRadius: 999, height: 240, position: "absolute", width: 240 },
  blobTopLeft: { backgroundColor: "rgba(74, 222, 128, 0.13)", left: -100, top: -100 },
  blobTopRight: { backgroundColor: "rgba(52, 211, 153, 0.12)", right: -110, top: 20 },
});
