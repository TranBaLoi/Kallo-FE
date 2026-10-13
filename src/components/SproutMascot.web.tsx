import { Asset } from "expo-asset";
import mascotHtml from "../assets/mascot-sprout.html";

const mascotUri = Asset.fromModule(mascotHtml).uri;

export default function SproutMascot() {
  return <iframe aria-label="Kallo sprout mascot" scrolling="no" src={mascotUri} style={{ background: "transparent", border: 0, height: 190, overflow: "hidden", width: 190 }} title="Kallo sprout mascot" />;
}
