import { ButtonStyle } from './button.interface';

export const buttonStyle: ButtonStyle = {
  root: props => ({
    backgroundColor: props.isDisabled ? 'red' : 'black',
    extend: props.extend?.root,
  }),
  container: props => ({
    backgroundColor: props.isDisabled ? 'red' : 'black',
  }),
};
