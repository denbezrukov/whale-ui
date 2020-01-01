import { Theme } from './theme.interface';
import { createPalette } from './palette/createPalette';
import { createTypography } from './typography/createTypography';

export function createTheme(): Theme {
  return {
    palette: createPalette(),
    typography: createTypography(),
  };
}
