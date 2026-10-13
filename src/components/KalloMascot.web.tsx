import { Asset } from "expo-asset";
import mascotHtml from "../assets/mascot.html";

const mascotUri = Asset.fromModule(mascotHtml).uri;

export default function KalloMascot() {
  return (
    <iframe
      aria-label="Kallo mascot animation"
      scrolling="no"
      src={mascotUri}
      style={{ background: "transparent", border: 0, height: 300, overflow: "hidden", width: 300 }}
      title="Kallo mascot"
    />
  );
}
