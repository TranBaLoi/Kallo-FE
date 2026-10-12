import { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  KalloButton,
  KalloLogo,
  KalloMascot,
  PaginationDots,
  ScreenBackground,
} from "../components";
import { COLORS } from "../constants";

type OnboardingScreenProps = { onComplete: () => void };

type OnboardingStep = { title: string; highlight?: string; description: string };

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    title: "Ứng dụng dinh dưỡng top #1",
    highlight: "App Store",
    description: "Ứng dụng cá nhân hoá món ăn, thói quen và lối sống dành cho người Việt.",
  },
  {
    title: "Kế hoạch calo & dinh dưỡng thông minh",
    description: "Tính toán chuẩn xác theo thể trạng và mục tiêu sức khỏe của bạn.",
  },
  {
    title: "Đồng hành cùng AI mỗi bữa ăn",
    description: "Gợi ý thực đơn, nhắc nhở và tối ưu thói quen sống lành mạnh mỗi ngày.",
  },
];

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef<FlatList<OnboardingStep>>(null);

  const updateActiveIndex = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActiveIndex(Math.min(ONBOARDING_STEPS.length - 1, Math.round(nativeEvent.contentOffset.x / width)));
  };

  const handleAction = () => {
    if (activeIndex === ONBOARDING_STEPS.length - 1) {
      onComplete();
      return;
    }
    slidesRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true });
  };

  const buttonTitle = activeIndex === 0 ? "Bắt đầu ngay" : activeIndex === 2 ? "Khám phá ngay" : "Tiếp tục";

  return (
    <ScreenBackground>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <KalloLogo />
        </View>

        <FlatList
          data={ONBOARDING_STEPS}
          horizontal
          key={width}
          keyExtractor={(item) => item.title}
          onMomentumScrollEnd={updateActiveIndex}
          pagingEnabled
          ref={slidesRef}
          renderItem={({ item }) => (
            <View style={[styles.slide, { width }]}>
              <View style={styles.mascotArea}>
                <KalloMascot />
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                {item.highlight && <Text style={styles.highlight}>{item.highlight}</Text>}
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          style={styles.slides}
        />

        <View style={styles.footer}>
          <PaginationDots activeIndex={activeIndex} total={ONBOARDING_STEPS.length} />
          <KalloButton onPress={handleAction} title={buttonTitle} />
        </View>
      </SafeAreaView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: { alignItems: "center", paddingBottom: 4, paddingTop: 12 },
  slides: { flex: 1 },
  slide: { alignItems: "center", flex: 1, justifyContent: "center", paddingHorizontal: 24 },
  mascotArea: { alignItems: "center", flex: 1, justifyContent: "flex-end", paddingBottom: 18 },
  content: { alignItems: "center", flex: 1, justifyContent: "flex-start", maxWidth: 360 },
  title: {
    color: COLORS.slate900,
    fontSize: 27,
    fontWeight: "800",
    lineHeight: 34,
    textAlign: "center",
  },
  highlight: {
    color: "#059669",
    fontSize: 27,
    fontWeight: "800",
    lineHeight: 34,
    textAlign: "center",
  },
  description: {
    color: COLORS.slate600,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 22,
    marginTop: 14,
    paddingHorizontal: 6,
    textAlign: "center",
  },
  footer: { gap: 28, paddingBottom: 20, paddingHorizontal: 24, paddingTop: 14 },
});
