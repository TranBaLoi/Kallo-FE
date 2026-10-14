# Screen Navigation and Transitions Design

## Goal

Replace the hand-written screen selection in `App.tsx` with a navigation stack and add distinct, polished transitions between Onboarding, Login, and Home. Preserve familiar mobile back behavior.

## User-approved behavior

- Screen flow: Onboarding → Login → Home.
- Back from Login returns to Onboarding; back from Home returns to Login.
- Each forward transition should have a different animation for variety. Reverse navigation should use the navigation library's corresponding reverse transition.
- Use native stack navigation, with headers hidden so the existing screens retain their current visual design.
- Keep the existing `onComplete` and `onLogin` screen callbacks where practical, minimizing changes to screen components.
- Do not add unrelated screen features or refactor screen UI.

## Proposed implementation

Add a native stack navigator under `src/navigation/index.ts` and configure the screen-specific transitions there. `App.tsx` will render the navigator and retain the existing status bar. Register the existing Onboarding, Login, and Home screens as stack routes. Starting route is Onboarding; the existing callbacks will navigate to Login and Home respectively.

Use React Navigation's native stack and its built-in transition presets/options rather than implementing custom animation code. Choose a supported distinct preset for Onboarding → Login (fade-from-bottom) and Login → Home (horizontal slide). Hide stack headers and enable normal back gesture/system back behavior.

## Dependencies and compatibility

The current `package.json` does not declare React Navigation. Before implementation, verify Expo SDK 57-compatible package versions and required native dependencies. Install only the packages required for native stack navigation, using Expo-compatible installation commands. Web should continue to render the stack screens; native-specific transition behavior may differ by platform.

## Validation

- Run the project's `npm run check` TypeScript check.
- Verify navigation starts at Onboarding; completing onboarding opens Login; login action opens Home; back from Login returns to Onboarding; back from Home returns to Login.
- Confirm headers remain hidden and the existing screen callbacks/UI still work.

## Scope exclusions

No authentication implementation, persistence of onboarding completion, deep linking, custom gesture system, or unrelated UI changes.
