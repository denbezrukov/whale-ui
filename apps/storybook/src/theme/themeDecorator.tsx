import React from 'react';
import { createTheme, StyleProvider } from 'whale-ui-style';

export const ThemeDecorator = (storyFn: Function) => {
  const theme = createTheme();

  return <StyleProvider theme={theme}>{storyFn()}</StyleProvider>;
};
