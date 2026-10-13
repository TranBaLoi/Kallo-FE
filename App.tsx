import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";

export default function App() {
  const [screen, setScreen] = useState<"onboarding" | "login" | "home">("onboarding");

  return (
    <>
      {screen === "onboarding" ? (
        <OnboardingScreen onComplete={() => setScreen("login")} />
      ) : screen === "login" ? (
        <LoginScreen onLogin={() => setScreen("home")} />
      ) : (
        <HomeScreen />
      )}
      <StatusBar style="auto" />
    </>
  );
}
