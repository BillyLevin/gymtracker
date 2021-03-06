import React from 'react';
import { capitalizeString } from '../../utils/capitalizeString';
import { FormInput } from '../FormInput';
import SelectComponent from '../Select';
import './InputGroup.scss';

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
      {inputType === 'multi-select' && (
        <SelectComponent
          {...props}
          field={field}
          form={form}
          hasError={hasError}
          isMulti={true}
          isSearchable={false}
          defaultValue={defaultValue}
        />
      )}

      {inputType === 'select' && (
        <SelectComponent
          defaultValue={defaultValue}
          {...props}
          field={field}
          form={form}
          hasError={hasError}
          isSearchable={false}
        />
      )}
      <div className="error-message">{hasError ? capitalizeString(errors[field.name]) : ''}</div>
    </div>
  );
};

InputGroup.defaultProps = {
  inputType: 'default',
};

export default InputGroup;
