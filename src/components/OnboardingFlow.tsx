// src/components/OnboardingFlow.tsx
import { useState } from "react";
import OnboardingScreen1 from "./OnboardingScreen1";
import OnboardingScreen2 from "./OnboardingScreen2";

const OnboardingFlow = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <OnboardingScreen1 key={0} onNext={() => setCurrentScreen(1)} />,
    <OnboardingScreen2 key={1} onNext={() => setCurrentScreen(2)} />,
    // Add more screens here as needed
  ];

  return screens[currentScreen];
};

export default OnboardingFlow;
