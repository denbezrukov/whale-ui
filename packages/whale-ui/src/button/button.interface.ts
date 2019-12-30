import { Styles, PartialStyles } from 'whale-ui-style';

export interface ButtonProps {
  extend?: PartialStyles<ButtonStyleExtendKeys>;
}

export interface ButtonStyleProps {
  isDisabled: boolean;
  extend?: PartialStyles<ButtonStyleExtendKeys>;
}

interface ButtonStyleExtendKeys {
  root: void;
}

type ButtonStyleKeys = ButtonStyleExtendKeys & {
  container: void;
};

export type ButtonStyle = Styles<ButtonStyleProps, ButtonStyleKeys>;
