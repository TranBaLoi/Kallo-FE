import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";

export default function App() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  return (
    <>
      {hasSeenOnboarding ? (
        <HomeScreen />
      ) : (
        <OnboardingScreen onComplete={() => setHasSeenOnboarding(true)} />
      )}
      <StatusBar style="auto" />
    </>
  );
}
