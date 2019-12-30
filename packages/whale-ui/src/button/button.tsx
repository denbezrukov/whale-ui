import React, { FunctionComponent, useState } from 'react';
import { useStyle } from 'whale-ui-style';
import { ButtonProps, ButtonStyleProps } from './button.interface';
import { buttonStyle } from './button.style';

export const Button: FunctionComponent<ButtonProps> = props => {
  const { extend } = props;
  const [count, setCount] = useState(0);
  const { css } = useStyle<ButtonStyleProps>({
    isDisabled: true,
    extend,
  });

  return (
    <div className={css(buttonStyle.root)}>
      <button
        onClick={() => setCount(prevState => prevState + 1)}
        type="button"
      >
        button
      </button>
      <span data-testid="count">{count}</span>
    </div>
  );
};
