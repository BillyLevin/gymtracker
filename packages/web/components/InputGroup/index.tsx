import React from 'react';
import { FormInput } from '../FormInput';

import './InputGroup.scss';
import { capitalizeString } from '../../utils/capitalizeString';
import MultiSelect from '../MultiSelect';
import SelectComponent from '../Select';

interface Props {
  inputType?: string;
  label: string;
}

const InputGroup: React.FC<Props> = ({
  field,
  label,
  form,
  inputType,
  defaultValue,
  ...props
}: any) => {
  const { touched, errors } = form;
  const hasError = !!(touched[field.name] && errors[field.name]);
  return (
    <div className="input-group">
      <label htmlFor={field.name}>{label}</label>
      {inputType === 'default' && <FormInput error={hasError} {...props} {...field} />}
      {inputType === 'multi-select' && <MultiSelect {...props} field={field} form={form} />}
      {inputType === 'select' && (
        <SelectComponent defaultValue={defaultValue} {...props} field={field} form={form} />
      )}
      <div className="error-message">{hasError ? capitalizeString(errors[field.name]) : ''}</div>
    </div>
  );
};

InputGroup.defaultProps = {
  inputType: 'default',
};

export default InputGroup;
