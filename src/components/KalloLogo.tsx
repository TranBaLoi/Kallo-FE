import Svg, { Circle, Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import { View } from "react-native";

export default function KalloLogo() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg height="48" viewBox="70 50 590 200" width="180">
        <Defs>
          <LinearGradient id="logoDark" x1="0%" x2="0%" y1="0%" y2="100%">
            <Stop offset="0%" stopColor="#0f172a" />
            <Stop offset="100%" stopColor="#1e293b" />
          </LinearGradient>
          <LinearGradient id="sprout" x1="0%" x2="100%" y1="0%" y2="100%">
            <Stop offset="0%" stopColor="#4ade80" />
            <Stop offset="60%" stopColor="#22c55e" />
            <Stop offset="100%" stopColor="#16a34a" />
          </LinearGradient>
          <LinearGradient id="leafDark" x1="0%" x2="100%" y1="0%" y2="100%">
            <Stop offset="0%" stopColor="#22c55e" />
            <Stop offset="100%" stopColor="#15803d" />
          </LinearGradient>
        </Defs>
        <Rect fill="url(#logoDark)" height="150" rx="17" width="34" x="95" y="75" />
        <Path d="M 120 160 L 182 88 C 188 81 198 80 204 86 C 211 93 210 102 203 109 L 155 162 Z" fill="url(#logoDark)" />
        <Path d="M 195 76 L 212 68 L 206 88 Z" fill="url(#sprout)" />
        <Path d="M 138 152 L 195 215 C 202 222 202 232 195 238 C 188 244 178 243 171 236 L 118 178 Z" fill="url(#logoDark)" />
        <Path d="M 280 120 C 242 120 212 145 212 175 C 212 205 242 230 280 230 C 298 230 314 223 325 212 L 325 218 C 325 224 330 228 336 228 C 342 228 347 224 347 218 L 347 132 C 347 125 342 120 336 120 C 330 120 325 125 325 131 L 325 138 C 314 127 298 120 280 120 Z M 284 148 C 307 148 325 161 325 175 C 325 189 307 202 284 202 C 261 202 244 189 244 175 C 244 161 261 148 284 148 Z" fill="url(#logoDark)" />
        <Path d="M 385 68 C 395 68 404 76 404 86 L 404 212 C 404 222 395 230 385 230 C 375 230 366 222 366 212 L 366 86 C 366 76 375 68 385 68 Z" fill="url(#logoDark)" />
        <Path d="M 442 68 C 452 68 461 76 461 86 L 461 212 C 461 222 452 230 442 230 C 432 230 423 222 423 212 L 423 86 C 423 76 432 68 442 68 Z" fill="url(#logoDark)" />
        <Path d="M 548 120 C 505 120 474 145 474 175 C 474 205 505 230 548 230 C 591 230 622 205 622 175 C 622 145 591 120 548 120 Z M 548 148 C 574 148 592 160 592 175 C 592 190 574 202 548 202 C 522 202 504 190 504 175 C 504 160 522 148 548 148 Z" fill="url(#logoDark)" />
        <Path d="M 578 132 C 584 116 596 102 610 94" fill="none" stroke="#22c55e" strokeLinecap="round" strokeWidth="5" />
        <Path d="M 610 94 C 582 92 576 70 596 62 C 614 55 620 76 610 94 Z" fill="url(#sprout)" />
        <Path d="M 610 94 C 626 74 648 78 644 96 C 640 110 622 108 610 94 Z" fill="url(#leafDark)" />
        <Circle cx="638" cy="168" fill="url(#sprout)" r="11" />
        <Circle cx="635" cy="165" fill="#ffffff" opacity={0.9} r="3.5" />
      </Svg>
    </View>
  );
}
