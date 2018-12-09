import React from 'react';
import { FormInput } from '../FormInput';

import './InputGroup.scss';
import { capitalizeString } from '../../utils/capitalizeString';

export const InputGroup: React.FC = ({
  field,
  label,
  form: { touched, errors },
  ...props
}: any) => {
  const hasError = !!(touched[field.name] && errors[field.name]);
  return (
    <div className="input-group">
      <label htmlFor={field.name}>{label}</label>
      <FormInput error={hasError} {...props} {...field} />
      {hasError && <div className="error-message">{capitalizeString(errors[field.name])}</div>}
    </div>
  );
};
