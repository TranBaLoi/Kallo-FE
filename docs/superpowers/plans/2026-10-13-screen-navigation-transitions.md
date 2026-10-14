# Screen Navigation and Transitions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace App's conditional screen rendering with a native navigation stack that animates Onboarding → Login → Home and supports back navigation.

**Architecture:** Use React Navigation native stack, with the navigator in `src/navigation/index.ts` and route-specific transitions. Preserve screen callback props by adapting stack navigation actions at route registration; keep `App.tsx` responsible for the navigator and status bar only.

**Tech Stack:** Expo SDK 57, React Native 0.86, React Navigation native stack, TypeScript.

**Spec:** `docs/superpowers/specs/2026-10-13-screen-navigation-transitions-design.md`

## Global Constraints

- Screen flow: Onboarding → Login → Home.
- Back from Login returns to Onboarding; back from Home returns to Login.
- Each forward transition should have a different animation for variety. Reverse navigation should use the navigation library's corresponding reverse transition.
- Use native stack navigation, with headers hidden so the existing screens retain their current visual design.
- Keep the existing `onComplete` and `onLogin` screen callbacks where practical, minimizing changes to screen components.
- Do not add unrelated screen features or refactor screen UI.
- Verify Expo SDK 57-compatible package versions and required native dependencies; install only packages required for native stack navigation using Expo-compatible installation commands.
- Web should continue to render the stack screens; native-specific transition behavior may differ by platform.

## Review Focus

- First render on iOS/Android/Web must start at Onboarding — verify initial route.
- Completing onboarding must push Login once and preserve Onboarding beneath it — verify Login can go back.
- Triggering Login action must push Home once and preserve Login beneath it — verify back returns to Login.
- Headers must not appear over screens — verify each route has `headerShown: false`.
- Native transition presets must not break web rendering — run the web app and check route progression; native-specific animation differences are acceptable.

---

### Task 1: Add stack navigation and route transitions

**Files:**
- Modify: `package.json` and lockfile (install Expo-compatible navigation dependencies)
- Modify: `src/navigation/index.ts`
- Modify: `App.tsx`

**Interfaces:**
- Consumes: existing `OnboardingScreen({ onComplete: () => void })`, `LoginScreen({ onLogin: () => void })`, and `HomeScreen()`.
- Produces: default `Navigation` component exported from `src/navigation/index.ts`.

- [ ] **Step 1: Install compatible navigation packages**

Use Expo's installer so versions match SDK 57; include only React Navigation core, native stack, and required Expo/React Native peer dependencies as reported by Expo. For example, inspect `npx expo install --help` and install `@react-navigation/native`, `@react-navigation/native-stack`, `react-native-screens`, and `react-native-safe-area-context` with `npx expo install` (include `react-native-gesture-handler` only if required by SDK/native-stack setup).

- [ ] **Step 2: Define typed routes and create the stack in `src/navigation/index.ts`**

Implement the route registrations with this structure, using the native-stack transition options supported by the installed version:

```tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          component={({ navigation }) => (
            <OnboardingScreen onComplete={() => navigation.navigate("Login")} />
          )}
          name="Onboarding"
          options={{ animation: "fade_from_bottom" }}
        />
        <Stack.Screen
          component={({ navigation }) => (
            <LoginScreen onLogin={() => navigation.navigate("Home")} />
          )}
          name="Login"
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen component={HomeScreen} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Adjust route component typing to use `NativeStackScreenProps<RootStackParamList, RouteName>` if inference requires it. Confirm options apply to the route when it is pushed; if animation is configured on the destination route, ensure the desired transition belongs to that route. Set Home's animation to a supported different preset only if needed to achieve distinct transitions in both forward steps.

- [ ] **Step 3: Replace App's local screen state with the navigator**

Change `App.tsx` to render `Navigation` and retain the `StatusBar`:

```tsx
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
```

- [ ] **Step 4: Run the type check**

Run: `npm run check`
Expected: exit code 0 with no TypeScript errors.

- [ ] **Step 5: Verify navigation and platform behavior**

Run: `npm run web`
Expected: app opens on Onboarding; completing onboarding displays Login; pressing a social login button displays Home; browser/native back returns Home → Login → Onboarding; no navigation headers are visible. Also launch on an available native platform and verify native transitions/back gesture if the environment supports it. Record any platform not available for testing rather than claiming it passed.
