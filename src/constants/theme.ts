export const COLORS = {
  brand: {
    dark: "#07100D",
    surface: "#0E1F1A",
    primary: "#22C55E",
    accent: "#4ADE80",
    lime: "#84CC16",
    glow: "#34D399",
    darkgreen: "#042416",
  },
  slate900: "#0F172A",
  slate600: "#475569",
  slate300: "#CBD5E1",
  white: "#FFFFFF",
} as const;

export const GRADIENTS = {
  background: ["#ECFDF5", "#F0FDF4", "#FFFFFF"] as const,
  primaryButton: ["#16A34A", "#22C55E", "#34D399"] as const,
  activeDot: ["#22C55E", "#10B981", "#34D399"] as const,
  catSkin: ["#4ADE80", "#22C55E", "#15803D"] as const,
  gold: ["#FEF08A", "#FACC15", "#CA8A04"] as const,
} as const;

export const RADIUS = { sm: 8, md: 12, lg: 16, xl: 24, full: 9999 } as const;

export const SPACING = { sm: 8, md: 16, lg: 24, xl: 32 } as const;
