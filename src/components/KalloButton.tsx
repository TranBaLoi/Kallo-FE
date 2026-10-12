import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { COLORS, GRADIENTS, RADIUS } from "../constants";

type KalloButtonProps = {
  title: string;
  onPress: () => void;
  showArrow?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function KalloButton({
  title,
  onPress,
  showArrow = true,
  style,
}: KalloButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={style}>
      {({ pressed }) => (
        <LinearGradient
          colors={GRADIENTS.primaryButton}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={[styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.label}>{title}</Text>
          {showArrow && <Text style={styles.arrow}>→</Text>}
        </LinearGradient>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: "rgba(255,255,255,0.4)",
    borderRadius: RADIUS.xl,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    minHeight: 58,
    paddingHorizontal: 24,
    shadowColor: COLORS.brand.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 5,
  },
  pressed: { opacity: 0.85, transform: [{ scale: 0.985 }] },
  label: { color: COLORS.brand.darkgreen, fontSize: 17, fontWeight: "800" },
  arrow: { color: COLORS.brand.darkgreen, fontSize: 25, marginLeft: 10, marginTop: -2 },
});
