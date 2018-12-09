import * as React from 'react';

import './Button.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  theme: string;
}

const Button: React.FC<Props> = ({ disabled, theme, children, ...props }) => (
  <button className={theme === 'primary' ? 'btn btn--primary' : 'btn btn--secondary'} {...props}>
    {children}
  </button>
);

export default Button;
