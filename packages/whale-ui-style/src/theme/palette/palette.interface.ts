export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
}
