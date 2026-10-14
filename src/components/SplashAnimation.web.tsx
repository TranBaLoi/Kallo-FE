import { useEffect } from "react";
import { Asset } from "expo-asset";
import splashHtml from "../assets/kallo_splash_intro.html";

type SplashAnimationProps = { onComplete: () => void };
const splashUri = Asset.fromModule(splashHtml).uri;

export default function SplashAnimation({ onComplete }: SplashAnimationProps) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "splashComplete") onComplete();
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onComplete]);

  return (
    <iframe
      aria-label="Kallo splash screen animation"
      scrolling="no"
      src={splashUri}
      style={{ background: "#0a1116", border: 0, height: "100%", width: "100%" }}
      title="Kallo splash screen"
    />
  );
}
