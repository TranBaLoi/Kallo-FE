import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { COLORS, GRADIENTS, RADIUS } from "../constants";

type PaginationDotsProps = { total: number; activeIndex: number };

export default function PaginationDots({ total, activeIndex }: PaginationDotsProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }, (_, index) =>
        index === activeIndex ? (
          <LinearGradient
            key={index}
            colors={GRADIENTS.activeDot}
            end={{ x: 1, y: 0 }}
            start={{ x: 0, y: 0 }}
            style={styles.active}
          />
        ) : (
          <View key={index} style={styles.inactive} />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { alignItems: "center", flexDirection: "row", gap: 10 },
  active: { borderRadius: RADIUS.full, height: 8, width: 28 },
  inactive: { backgroundColor: COLORS.slate300, borderRadius: RADIUS.full, height: 8, width: 8 },
});
