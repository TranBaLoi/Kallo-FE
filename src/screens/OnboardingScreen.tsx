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
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from "react-native-svg";
import { COLORS } from "../constants";
import {
  KalloButton,
  KalloLogo,
  ExpertMascot,
  KalloMascot,
  PaginationDots,
  ThinkingMascot,
  ScreenBackground,
} from "../components";

type OnboardingScreenProps = { onComplete: () => void };

type OnboardingStep = { title: string; titleLines?: string[]; highlight?: string; description: string };

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    title: "Ứng dụng dinh dưỡng top #1",
    titleLines: ["Ứng dụng dinh dưỡng", "top #1"],
    highlight: "App Store",
    description: "Ứng dụng cá nhân hoá món ăn, thói quen và lối sống dành cho người Việt.",
  },
  {
    title: "Tính calo và dinh dưỡng món Việt cực chuẩn",
    titleLines: ["Tính calo và dinh dưỡng", "món Việt cực chuẩn"],
    description: "Theo đúng cách nấu & khẩu phần bạn chọn",
  },
  {
    title: "Đồng hành cùng AI mỗi bữa ăn",
    titleLines: ["Đồng hành cùng AI", "mỗi bữa ăn"],
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
          renderItem={({ item, index }) => {
            const titleLines = item.titleLines ?? [item.title];

            return (
            <View style={[styles.slide, { width }]}>
              <View style={styles.mascotArea}>
                {index === 1 ? <ThinkingMascot /> : index === 2 ? <ExpertMascot /> : <KalloMascot />}
              </View>
              <View style={styles.content}>
                <Svg height={titleLines.length === 2 ? 72 : 40} viewBox={`0 0 360 ${titleLines.length === 2 ? 72 : 40}`} width="100%">

                  <Defs>
                    <LinearGradient id={`titleGradient-${index}`} x1="0%" x2="100%" y1="0%" y2="100%">
                      <Stop offset="0%" stopColor="#166534" />
                      <Stop offset="55%" stopColor="#059669" />
                      <Stop offset="100%" stopColor="#34D399" />
                    </LinearGradient>
                  </Defs>
                  {titleLines.map((line, lineIndex) => (
                    <SvgText key={line} fill={`url(#titleGradient-${index})`} fontFamily="System" fontSize={25} fontWeight="800" textAnchor="middle" x="180" y={31 + lineIndex * 32}>
                      {line}
                    </SvgText>
                  ))}
                </Svg>
                {item.highlight && <Text style={styles.highlight}>{item.highlight}</Text>}
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
            );
          }}
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
  header: { alignItems: "center", paddingTop: 10 },
  slides: { flex: 1 },
  slide: { alignItems: "center", flex: 1, justifyContent: "center", paddingHorizontal: 24 },
  mascotArea: { alignItems: "center", height: 380, justifyContent: "center", width: "100%" },
  content: { alignItems: "center", flexGrow: 0, justifyContent: "flex-start", maxWidth: 360, width: "100%" },
  highlight: {
    color: "#10B981",
    fontSize: 27,
    fontWeight: "900",
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
  footer: { gap: 24, paddingBottom: 20, paddingHorizontal: 24, paddingTop: 8 },
});
