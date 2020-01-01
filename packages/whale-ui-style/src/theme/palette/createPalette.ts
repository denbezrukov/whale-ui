import { Palette } from './palette.interface';

export function createPalette(): Palette {
  return {
    primary: {
      light: '#f27573',
      main: '#ef5350',
      dark: '#a73a38',
    },
    secondary: {
      light: '#33eb91',
      main: '#00e676',
      dark: '#00a152',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    warning: {
      light: '#ffd54f',
      main: '#ffc107',
      dark: '#ffa000',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
  };
}
