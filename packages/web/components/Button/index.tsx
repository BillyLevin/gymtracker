import * as React from 'react';
import './Button.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  theme: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const getClassName = (theme: string): string => {
  if (theme === 'primary') {
    return 'btn btn--primary';
  }

  if (theme === 'secondary') {
    return 'btn btn--secondary';
  }

  if (theme === 'delete') {
    return 'btn btn--delete';
  } else {
    return 'btn';
  }
};

const Button: React.FC<Props> = ({ disabled, theme, children, ...props }) => (
  <button className={getClassName(theme)} {...props}>
    {children}
  </button>
);

export default Button;
