import { ThemeConfig } from "tailwindcss/types/config"

export const colors = {
  white: "#FFFFFF",
  font: {
    white: "#FFFFFF",
    black: "#111111",
    gray: {
      "03": "#505050",
      "04": "#767676",
      "05": "#999999",
    },
  },
  line: {
    light: "#F1F1F1",
    regular: "#E5E5E5",
    black: "#111111",
  },
  bg: {
    red: "#DC0000",
    green: "#04B014",
    yellow: "#FFAA00",
    regular: "#F1F1F1",
    light: "#F7F7F7",
  },
  brand: {
    main: "#00BE4F",
    sub1: "#199EF0",
    sub2: "#FFEB34",
  },
  gray: {
    200: "#F2F2F8",
    300: "#EEEEF4",
  },
  green: {
    900: "#007820",
    800: "#009935",
    700: "#00AB41",
    600: "#00BE4F",
    500: "#00CE59",
    400: "#0BD774",
    300: "#60E593",
    200: "#93E8B0",
    100: "#BFF1CF",
    50: "#E6F7EA",
  },
  blue: {
    900: "#1659A5",
    800: "#1779C7",
    700: "#1A8ADB",
    600: "#199EF0",
    500: "#18ACFF",
    400: "#2DB9FF",
    300: "#51C6FF",
    200: "#83DAFF",
    100: "#B4E6FF",
    50: "#E2F5FF",
  },
  yellow: {
    900: "#F77D0E",
    800: "#FAA71E",
    700: "#FCBF26",
    600: "#FDD82E",
    500: "#FFEB34",
    400: "#FCEB51",
    300: "#FEF072",
    200: "#FFF59B",
    100: "#FFF9C3",
    50: "#FFFDE7",
  },
  orange: {
    50: "#FFF8ED",
    100: "#FFECC7",
    200: "#FFE09C",
    300: "#FFD270",
    400: "#FFC652",
    500: "#FFBC42",
    600: "#FFAF3E",
    700: "#FF9E3A",
    800: "#FF8F36",
    900: "#FF7630",
  },
  black: {
    50: "#F1F1F1",
    100: "#E1E1E1",
    200: "#BBBBBB",
    300: "#999999",
    400: "#888888",
    500: "#767676",
    600: "#666666",
    700: "#505050",
    800: "#333333",
    900: "#111111",
    DEFAULT: "#111111",
  },
} satisfies ThemeConfig["colors"]
