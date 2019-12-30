import { configure } from '@storybook/react';
import { configureDecorators } from './decorators';
import './addons';

const packagesStories = require.context(
  '../../../../packages',
  true,
  /\.stories\.jsx?$/,
);

const init = () => {
  const loadStories = () => {
    configureDecorators();
    packagesStories.keys().forEach(filename => packagesStories(filename));
  };

  configure(loadStories, module);
};

init();
