import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../button';

export default { title: 'Button' };

storiesOf('Button', module).add('simple', () => (
  <Button extend={{ root: { color: 'blue' } }} />
));
