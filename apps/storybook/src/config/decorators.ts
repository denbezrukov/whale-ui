import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '../theme/themeDecorator';

export function configureDecorators() {
  addDecorator(ThemeDecorator);
}
