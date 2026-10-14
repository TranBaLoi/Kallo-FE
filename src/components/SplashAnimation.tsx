import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Asset } from "expo-asset";
import { WebView } from "react-native-webview";
import splashHtml from "../assets/kallo_splash_intro.html";

type SplashAnimationProps = { onComplete: () => void };
const splashAsset = Asset.fromModule(splashHtml);

export default function SplashAnimation({ onComplete }: SplashAnimationProps) {
  const [uri, setUri] = useState(splashAsset.uri);

  useEffect(() => {
    let mounted = true;
    splashAsset.downloadAsync().then(() => {
      if (mounted) setUri(splashAsset.localUri ?? splashAsset.uri);
    });
    return () => { mounted = false; };
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        allowFileAccess
        onMessage={(event) => {
          if (event.nativeEvent.data === "splashComplete") onComplete();
        }}
        originWhitelist={["*"]}
        scrollEnabled={false}
        source={{ uri }}
        style={styles.webView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#0a1116", flex: 1 },
  webView: { backgroundColor: "transparent", flex: 1 },
});
