import { IStyle } from 'fela';
import { CssFelaStyle } from 'react-fela';
import { Theme } from './theme/theme.interface';

export type Styles<Props, StyleKeys> = Record<
  keyof StyleKeys,
  CssFelaStyle<Theme, Props>
>;
export type PartialStyles<StyleKeys> = Partial<Record<keyof StyleKeys, IStyle>>;
