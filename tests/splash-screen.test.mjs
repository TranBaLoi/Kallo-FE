import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const splashHtml = read("../src/assets/kallo_splash_intro.html");
const navigation = read("../src/navigation/index.tsx");
const splashScreen = read("../src/screens/SplashScreen.tsx");
const splashComponent = read("../src/components/SplashAnimation.tsx");
const splashWebComponent = read("../src/components/SplashAnimation.web.tsx");

assert.match(splashHtml, /animation: loadingFill 2\.4s[^;]* 1 forwards;/);
assert.match(splashHtml, /animationend[\s\S]*postMessage\("splashComplete"/);
assert.match(navigation, /initialRouteName="Splash"/);
assert.match(navigation, /name="Splash"/);
assert.match(splashScreen, /SplashAnimation/);
assert.match(splashComponent, /WebView/);
assert.match(splashWebComponent, /iframe/);
assert.equal(existsSync(new URL("../src/screens/SplashScreen.web.tsx", import.meta.url)), false);
