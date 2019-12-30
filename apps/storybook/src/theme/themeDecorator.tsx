import React from 'react';
import { StyleProvider, Theme } from 'whale-ui-style';

export const ThemeDecorator = (storyFn: Function) => {
  const theme: Theme = {
    palette: {
      name: 'light',
    },
    font: {
      name: 'small',
    },
  };

  return <StyleProvider theme={theme}>{storyFn()}</StyleProvider>;
};
