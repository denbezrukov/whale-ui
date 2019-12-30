import { createRenderer } from 'fela';
import createIdentifier from 'fela-identifier';
import prefixer from 'fela-plugin-prefixer';
import unit from 'fela-plugin-unit';
import extend from 'fela-plugin-extend';

export const identifier = createIdentifier();

export const renderer = createRenderer({
  plugins: [prefixer(), unit(), extend()],
  enhancers: [identifier],
});
