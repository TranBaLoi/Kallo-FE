import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { askAI } from "../services/aiClient";

export default function HomeScreen() {
  const [answer, setAnswer] = useState("...");
  const [error, setError] = useState<string | null>(null);

  const onAsk = async () => {
    setError(null);
    try {
      setAnswer(await askAI("Gợi ý bữa sáng 500 kcal"));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Lỗi không rõ");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sức khỏe & Dinh dưỡng AI</Text>
      <Text>{error ?? answer}</Text>
      <Button title="Hỏi AI" onPress={onAsk} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  title: { fontSize: 20, fontWeight: "600" },
});
