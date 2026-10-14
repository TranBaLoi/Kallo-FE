import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SplashScreen from "../screens/SplashScreen";

type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
};

type OnboardingRouteProps = NativeStackScreenProps<RootStackParamList, "Onboarding">;
type LoginRouteProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Stack = createNativeStackNavigator<RootStackParamList>();

function OnboardingRoute({ navigation }: OnboardingRouteProps) {
  return <OnboardingScreen onComplete={() => navigation.navigate("Login")} />;
}

function LoginRoute({ navigation }: LoginRouteProps) {
  return <LoginScreen onLogin={() => navigation.navigate("Home")} />;
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash">
          {({ navigation }) => <SplashScreen onComplete={() => navigation.replace("Onboarding")} />}
        </Stack.Screen>
        <Stack.Screen component={OnboardingRoute} name="Onboarding" />
        <Stack.Screen component={LoginRoute} name="Login" options={{ animation: "fade_from_bottom" }} />
        <Stack.Screen component={HomeScreen} name="Home" options={{ animation: "slide_from_right" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
