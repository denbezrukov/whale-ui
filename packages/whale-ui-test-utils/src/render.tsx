import React, { FunctionComponent } from 'react';
import {
  render as innerRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { createTheme, StyleProvider } from 'whale-ui-style';

const theme = createTheme();

const AllTheProviders: FunctionComponent = ({ children }) => (
  <StyleProvider theme={theme}>{children}</StyleProvider>
);

export function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult {
  return innerRender(ui, { wrapper: AllTheProviders, ...options });
}
