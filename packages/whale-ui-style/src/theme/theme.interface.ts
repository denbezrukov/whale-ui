import { Palette } from './palette/palette.interface';

export interface Theme {
  palette: Palette;
  font: {
    name: string;
  };
}
