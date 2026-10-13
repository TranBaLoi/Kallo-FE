import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Asset } from "expo-asset";
import { WebView } from "react-native-webview";
import mascotHtml from "../assets/mascot.html";

const mascotAsset = Asset.fromModule(mascotHtml);

export default function KalloMascot() {
  const asset = mascotAsset;
  const [uri, setUri] = useState(asset.uri);

  useEffect(() => {
    let mounted = true;
    asset.downloadAsync().then(() => {
      if (mounted) setUri(asset.localUri ?? asset.uri);
    });
    return () => { mounted = false; };
  }, [asset]);

  return (
    <View style={styles.container}>
      <WebView
        allowFileAccess
        originWhitelist={["*"]}
        scrollEnabled={false}
        source={{ uri }}
        style={styles.webView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 300, overflow: "hidden", width: 300 },
  webView: { backgroundColor: "transparent", flex: 1 },
});
