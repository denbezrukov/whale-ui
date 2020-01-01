import { Theme } from './theme.interface';
import { createPalette } from './palette/createPalette';

export function createTheme(): Theme {
  return {
    palette: createPalette(),
    font: {
      name: '',
    },
  };
}
