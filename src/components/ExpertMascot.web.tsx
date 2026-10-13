import { Asset } from "expo-asset";
import mascotHtml from "../assets/mascot-expert.html";

const mascotUri = Asset.fromModule(mascotHtml).uri;

export default function ExpertMascot() {
  return (
    <iframe
      aria-label="Kallo nutrition expert badge mascot"
      scrolling="no"
      src={mascotUri}
      style={{ background: "transparent", border: 0, height: 300, overflow: "hidden", width: 300 }}
      title="Kallo nutrition expert"
    />
  );
}
