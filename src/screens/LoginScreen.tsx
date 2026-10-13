import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { KalloLogo, ScreenBackground, SproutMascot } from "../components";
import { COLORS, RADIUS } from "../constants";

type LoginScreenProps = { onLogin: () => void };

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const showApple = Platform.OS !== "android";

  return (
    <ScreenBackground>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.logo}><KalloLogo /></View>
          <SproutMascot />
          <View style={styles.intro}>
            <Text style={styles.title}>Bắt đầu hành trình chăm sóc sức khoẻ của bạn với <Text style={styles.brand}>Kallo</Text></Text>
            <Text style={styles.description}>Đăng nhập vào Kallo thông qua tài khoản mạng xã hội dưới đây</Text>
          </View>
          <View style={styles.buttons}>
            {showApple && <SocialButton label="Tiếp tục với Apple" color="#000000" textColor="#FFFFFF" onPress={onLogin} icon="●" />}
            <SocialButton label="Tiếp tục với Google" color="#FFFFFF" textColor="#0F172A" onPress={onLogin} icon="G" />
            <SocialButton label="Tiếp tục với Facebook" color="#1877F2" textColor="#FFFFFF" onPress={onLogin} icon="f" />
          </View>
          <Text style={styles.terms}>Bằng việc tiếp tục, bạn đã đồng ý với <Text style={styles.link}>Điều khoản sử dụng</Text> và <Text style={styles.link}>Chính sách bảo mật</Text></Text>
        </ScrollView>
      </SafeAreaView>
    </ScreenBackground>
  );
}

type SocialButtonProps = { label: string; color: string; textColor: string; icon: string; onPress: () => void };

function SocialButton({ label, color, textColor, icon, onPress }: SocialButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.button, { backgroundColor: color }, color === "#FFFFFF" && styles.googleBorder, pressed && styles.pressed]}>
      <Text style={[styles.icon, { color: textColor }]}>{icon}</Text>
      <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingBottom: 20, paddingHorizontal: 24, paddingTop: 16 },
  logo: { marginBottom: 4 },
  intro: { alignItems: "center", marginTop: 4, maxWidth: 360 },
  title: { color: COLORS.slate900, fontSize: 24, fontWeight: "800", lineHeight: 32, textAlign: "center" },
  brand: { color: "#059669" },
  description: { color: COLORS.slate600, fontSize: 14, fontWeight: "500", lineHeight: 21, marginTop: 10, textAlign: "center" },
  buttons: { alignSelf: "stretch", gap: 12, marginTop: 20 },
  button: { alignItems: "center", borderRadius: RADIUS.full, flexDirection: "row", height: 52, justifyContent: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 12, elevation: 2 },
  googleBorder: { borderColor: "#E2E8F0", borderWidth: 1 },
  pressed: { opacity: 0.85, transform: [{ scale: 0.99 }] },
  icon: { fontSize: 18, fontWeight: "900", marginRight: 12, textAlign: "center", width: 20 },
  buttonText: { fontSize: 15, fontWeight: "700" },
  terms: { color: COLORS.slate600, fontSize: 12, lineHeight: 18, marginTop: 24, maxWidth: 340, textAlign: "center" },
  link: { color: "#059669", fontWeight: "700" },
});
