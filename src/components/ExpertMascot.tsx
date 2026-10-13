import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Asset } from "expo-asset";
import { WebView } from "react-native-webview";
import mascotHtml from "../assets/mascot-expert.html";

const mascotAsset = Asset.fromModule(mascotHtml);

export default function ExpertMascot() {
  const [uri, setUri] = useState(mascotAsset.uri);

  useEffect(() => {
    let mounted = true;
    mascotAsset.downloadAsync().then(() => {
      if (mounted) setUri(mascotAsset.localUri ?? mascotAsset.uri);
    });
    return () => { mounted = false; };
  }, []);

  return (
    <View style={styles.container}>
      <WebView allowFileAccess originWhitelist={["*"]} scrollEnabled={false} source={{ uri }} style={styles.webView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 300, overflow: "hidden", width: 300 },
  webView: { backgroundColor: "transparent", flex: 1 },
});
