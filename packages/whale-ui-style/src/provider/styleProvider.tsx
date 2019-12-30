import React, { FunctionComponent } from 'react';
import { RendererProvider, ThemeProvider } from 'react-fela';
import { StyleProviderProps } from './styleProvider.interface';
import { renderer } from '../fela/renderer';

export const StyleProvider: FunctionComponent<StyleProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RendererProvider>
  );
};
