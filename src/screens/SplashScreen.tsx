import { StyleSheet, View } from "react-native";
import SplashAnimation from "../components/SplashAnimation";

type SplashScreenProps = { onComplete: () => void };

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <View style={styles.container}>
      <SplashAnimation onComplete={onComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#0a1116", flex: 1 },
});
