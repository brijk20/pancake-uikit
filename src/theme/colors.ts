import { Colors } from "./types";

export const baseColors = {
  failure: "#FF0000",
  primary: "#FF0000",
  primaryBright: "#FF0000",
  primaryDark: "#FF0000",
  secondary: "#FF0000",
  success: "#FF0000",
  warning: "#FF0000",
};

export const brandColors = {
  binance: "#FF0000",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FF0000",
  backgroundDisabled: "#FF0000",
  contrast: "#FF0000",
  invertedContrast: "#FF0000",
  input: "#FF0000",
  tertiary: "#FF0000",
  text: "#FF0000",
  textDisabled: "#FF0000",
  textSubtle: "#FF0000",
  borderColor: "#FF0000",
  card: "#FF0000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FF0000 0%, #FF0000 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FF0000",
  background: "#FF0000",
  backgroundDisabled: "#FF0000",
  contrast: "#FF0000",
  invertedContrast: "#FF0000",
  input: "#FF0000",
  primaryDark: "#FF0000",
  tertiary: "#FF0000",
  text: "#FF0000",
  textDisabled: "#FF0000",
  textSubtle: "#FF0000",
  borderColor: "#FF0000",
  card: "#FF0000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FF0000 0%, #FF0000 100%)",
  },
};
