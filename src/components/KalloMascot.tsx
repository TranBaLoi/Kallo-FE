import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  RadialGradient,
  Stop,
  Text as SvgText,
} from "react-native-svg";

export default function KalloMascot() {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [floatAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.glowAura} />
      <Animated.View style={{ transform: [{ translateY: floatAnim }] }}>
        <Svg height="250" viewBox="0 0 240 240" width="250">
          <Defs>
            <LinearGradient id="catSkin" x1="120" x2="120" y1="50" y2="190">
              <Stop offset="0%" stopColor="#4ADE80" />
              <Stop offset="60%" stopColor="#22C55E" />
              <Stop offset="100%" stopColor="#15803D" />
            </LinearGradient>
            <LinearGradient id="earInner" x1="0" x2="0" y1="0" y2="1">
              <Stop offset="0%" stopColor="#BBF7D0" />
              <Stop offset="100%" stopColor="#4ADE80" />
            </LinearGradient>
            <LinearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
              <Stop offset="0%" stopColor="#FEF08A" />
              <Stop offset="45%" stopColor="#FACC15" />
              <Stop offset="100%" stopColor="#CA8A04" />
            </LinearGradient>
            <RadialGradient cx="50%" cy="50%" id="medal" r="50%">
              <Stop offset="0%" stopColor="#FFFFFF" />
              <Stop offset="40%" stopColor="#FDE047" />
              <Stop offset="100%" stopColor="#EAB308" />
            </RadialGradient>
          </Defs>

          {/* Laurel wreath */}
          <Path d="M68 185 C42 165 32 125 42 85 C45 72 52 60 62 50" fill="none" opacity={0.6} stroke="url(#gold)" strokeLinecap="round" strokeWidth="3" />
          <Path d="M42 85 C30 80 28 68 40 68 C48 68 46 78 42 85Z" fill="url(#gold)" />
          <Path d="M35 106 C22 104 22 92 34 90 C42 90 41 100 35 106Z" fill="url(#gold)" />
          <Path d="M34 128 C20 128 20 116 32 113 C41 112 40 122 34 128Z" fill="url(#gold)" />
          <Path d="M37 150 C24 154 26 142 37 138 C45 136 45 146 37 150Z" fill="url(#gold)" />
          <Path d="M48 170 C36 177 35 166 45 160 C53 157 55 166 48 170Z" fill="url(#gold)" />
          <Path d="M64 187 C54 196 50 186 58 178 C65 174 69 181 64 187Z" fill="url(#gold)" />

          <Path d="M172 185 C198 165 208 125 198 85 C195 72 188 60 178 50" fill="none" opacity={0.6} stroke="url(#gold)" strokeLinecap="round" strokeWidth="3" />
          <Path d="M198 85 C210 80 212 68 200 68 C192 68 194 78 198 85Z" fill="url(#gold)" />
          <Path d="M205 106 C218 104 218 92 206 90 C198 90 199 100 205 106Z" fill="url(#gold)" />
          <Path d="M206 128 C220 128 220 116 208 113 C199 112 200 122 206 128Z" fill="url(#gold)" />
          <Path d="M203 150 C216 154 214 142 203 138 C195 136 195 146 203 150Z" fill="url(#gold)" />
          <Path d="M192 170 C204 177 205 166 195 160 C187 157 185 166 192 170Z" fill="url(#gold)" />
          <Path d="M176 187 C186 196 190 186 182 178 C175 174 171 181 176 187Z" fill="url(#gold)" />

          {/* Shadow & Feet */}
          <Ellipse cx="120" cy="202" fill="#0E2F23" opacity={0.2} rx="50" ry="6" />
          <Ellipse cx="102" cy="190" fill="#15803D" rx="14" ry="10" />
          <Ellipse cx="138" cy="190" fill="#15803D" rx="14" ry="10" />

          {/* Body */}
          <Path d="M92 150 C92 135 148 135 148 150 C154 165 152 188 138 188 C128 188 126 178 120 178 C114 178 112 188 102 188 C88 188 86 165 92 150Z" fill="url(#catSkin)" />
          <Ellipse cx="88" cy="156" fill="#22C55E" rx="9" ry="14" />
          <Ellipse cx="152" cy="156" fill="#22C55E" rx="9" ry="14" />

          {/* Ears */}
          <Polygon fill="#22C55E" points="82,85 70,35 106,60" />
          <Polygon fill="url(#earInner)" points="83,80 75,44 101,63" />
          <Polygon fill="#22C55E" points="158,85 170,35 134,60" />
          <Polygon fill="url(#earInner)" points="157,80 165,44 139,63" />

          {/* Head & face */}
          <Ellipse cx="120" cy="108" fill="url(#catSkin)" rx="52" ry="46" />
          <Path d="M80 114 C76 128 92 138 108 138 C114 138 118 135 120 133 C122 135 126 138 132 138 C148 138 164 128 160 114 C157 104 140 102 120 102 C100 102 83 104 80 114Z" fill="#F0FDF4" />

          {/* Whiskers */}
          <Line stroke="#166534" strokeLinecap="round" strokeWidth="2.5" x1="84" x2="68" y1="120" y2="117" />
          <Line stroke="#166534" strokeLinecap="round" strokeWidth="2.5" x1="84" x2="69" y1="126" y2="128" />
          <Line stroke="#166534" strokeLinecap="round" strokeWidth="2.5" x1="156" x2="172" y1="120" y2="117" />
          <Line stroke="#166534" strokeLinecap="round" strokeWidth="2.5" x1="156" x2="171" y1="126" y2="128" />

          {/* Nose & mouth */}
          <Path d="M117 122 Q120 120 123 122 Q120 125 117 122Z" fill="#15803D" />
          <Path d="M116 125 Q120 128 124 125" fill="none" stroke="#15803D" strokeLinecap="round" strokeWidth="1.8" />

          {/* Cool sunglasses */}
          <Path d="M92 98 C92 94 112 94 114 100 C116 112 108 119 98 118 C92 117 92 108 92 98 Z" fill="#061A12" stroke="#10B981" strokeWidth="1.6" />
          <Path d="M148 98 C148 94 128 94 126 100 C124 112 132 119 142 118 C148 117 148 108 148 98 Z" fill="#061A12" stroke="#10B981" strokeWidth="1.6" />
          <Path d="M113 100 Q120 97 127 100" stroke="#10B981" strokeLinecap="round" strokeWidth="2.2" />
          <Path d="M96 100 L104 100 L99 110 L94 110 Z" fill="#4ADE80" opacity={0.6} />
          <Path d="M136 100 L144 100 L139 110 L134 110 Z" fill="#4ADE80" opacity={0.6} />

          {/* Medal #1 */}
          <G transform="translate(120, 160)">
            <Path d="M-8 8 L-14 26 L-5 22 L0 26 L-2 10" fill="#16A34A" />
            <Path d="M8 8 L14 26 L5 22 L0 26 L2 10" fill="#15803D" />
            <Circle cx="0" cy="4" fill="#042F1A" r="14" stroke="url(#gold)" strokeWidth="2.5" />
            <Circle cx="0" cy="4" fill="url(#medal)" r="11" />
            <SvgText
              fill="#062E1A"
              fontSize="12"
              fontWeight="900"
              textAnchor="middle"
              x="0"
              y="8"
            >
              1
            </SvgText>
          </G>
        </Svg>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  glowAura: {
    backgroundColor: "rgba(74, 222, 128, 0.22)",
    borderRadius: 999,
    height: 220,
    position: "absolute",
    width: 220,
  },
});
