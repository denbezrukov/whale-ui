import { IStyle } from 'fela';

export type Typography = Record<ThemeStyle, TypographyStyle> &
  FontStyle &
  TypographyUtils;

export type ThemeStyle =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

export type TypographyStyle = Required<
  Pick<IStyle, 'fontFamily' | 'fontSize' | 'fontWeight'>
> &
  Partial<Pick<IStyle, 'letterSpacing' | 'lineHeight' | 'textTransform'>>;

export type FontStyle = Required<{
  htmlFontSize: number;
  fontFamily: IStyle['fontFamily'];
  fontSize: number;
  fontWeightLight: IStyle['fontWeight'];
  fontWeightRegular: IStyle['fontWeight'];
  fontWeightMedium: IStyle['fontWeight'];
  fontWeightBold: IStyle['fontWeight'];
}>;

export interface TypographyUtils {
  pxToRem: (px: number) => string;
}
