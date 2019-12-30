import React, { FunctionComponent } from 'react';
import {
  render as innerRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { StyleProvider, Theme } from 'whale-ui-style';

const theme: Theme = { font: { name: '' }, palette: { name: '' } };

const AllTheProviders: FunctionComponent = ({ children }) => (
  <StyleProvider theme={theme}>{children}</StyleProvider>
);

export function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult {
  return innerRender(ui, { wrapper: AllTheProviders, ...options });
}
