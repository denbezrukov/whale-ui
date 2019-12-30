import { useFela } from 'react-fela';
import { Theme } from '../theme/theme.interface';

export const useStyle = <Props = {}>(props?: Props) =>
  useFela<Theme, Props>(props);
